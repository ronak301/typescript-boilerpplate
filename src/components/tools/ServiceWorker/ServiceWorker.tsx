import React, { useCallback, useState } from 'react';

import { Portal } from 'components/tools';
import { ServiceWorker as ServiceWorkerModal } from 'components/ui/modals';
import { isLocalhost, isProduction } from 'utils';

interface Config {
  readonly onSuccess?: (registration: ServiceWorkerRegistration) => void;
  readonly onUpdate?: (registration: ServiceWorkerRegistration) => void;
}

interface Props {
  readonly showUpdateModal?: boolean;
}

const ServiceWorker = ({ showUpdateModal = false }: Props) => {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  const reloadPageAndUnregister = useCallback(() => {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister().then(() => {
        window.location.reload();
      });
    });
  }, []);

  const registerValidSW = useCallback((swUrl: string, config?: Config) => {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        const getRegistration = registration;
        getRegistration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker === null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                console.log(
                  'New content is available and will be used when all tabs for this page are closed.'
                );
                config?.onUpdate?.(getRegistration);
                setUpdateAvailable(true);
              } else {
                console.log('Content is cached for offline use.');
                config?.onSuccess?.(getRegistration);
                setUpdateAvailable(false);
              }
            }
          };
        };
      })
      .catch((error) => {
        console.error('Error during service worker registration:', error);
      });
  }, []);

  const checkValidServiceWorker = useCallback(
    (swUrl: string, config?: Config) => {
      // Check if the service worker can be found. If it can't reload the page.
      fetch(swUrl, {
        headers: { 'Service-Worker': 'script' }
      })
        .then((response) => {
          // Ensure service worker exists, and that we really are getting a JS file.
          const contentType = response.headers.get('content-type');
          if (
            response.status === 404 ||
            (contentType != null && contentType.indexOf('javascript') === -1)
          ) {
            // No service worker found. Probably a different app. Reload the page.
            reloadPageAndUnregister();
          } else {
            // Service worker found. Proceed as normal.
            registerValidSW(swUrl, config);
          }
        })
        .catch(() => {
          console.log(
            'No internet connection found. App is running in offline mode.'
          );
        });
    },
    [registerValidSW, reloadPageAndUnregister]
  );

  const register = useCallback(
    (config?: Config) => {
      if (isProduction && 'serviceWorker' in navigator) {
        // The URL constructor is available in all browsers that support SW.
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
          // Our service worker won't work if PUBLIC_URL is on a different origin
          // from what our page is served on. This might happen if a CDN is used to
          // serve assets.
          return;
        }

        // Makes sure it loads once
        window.addEventListener('load', () => {
          const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

          if (isLocalhost()) {
            // This is running on localhost. Let's check if a service worker still exists or not.
            checkValidServiceWorker(swUrl, config);

            // Add some additional logging to localhost, pointing developers to the
            // service worker/PWA documentation.
            navigator.serviceWorker.ready.then(() => {
              console.log(
                'This web app is being served cache-first by a service worker.'
              );
            });
          } else {
            // Is not localhost. Just register service worker
            registerValidSW(swUrl, config);
          }
        });
      }
    },
    [checkValidServiceWorker, registerValidSW]
  );

  if (isProduction) {
    register();
  }

  if (updateAvailable && showUpdateModal) {
    return (
      <Portal>
        <ServiceWorkerModal onUpdate={reloadPageAndUnregister} />
      </Portal>
    );
  }

  return null;
};

export default ServiceWorker;
