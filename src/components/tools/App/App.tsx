import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { ScrollToTop, ErrorBoundary } from 'components/tools';
import { Layout, Container } from 'components/ui/general';
import routes from 'routes';

const App = () => {
  return (
    <>
      <Helmet
        titleTemplate="%s | typescript-boilerplate"
        defaultTitle="typescript-boilerplate"
      />
      <Router>
        <ScrollToTop />
        <Layout>
          <ErrorBoundary fallback={<Container>Error...</Container>}>
            <Suspense fallback={<Container>Loading...</Container>}>
              <Switch>
                <Route exact path="/" component={routes.Home} />
                <Route exact path="/grid" component={routes.Grid} />
                <Route exact path="/form" component={routes.Form} />
                <Route component={routes.NotFound} />
              </Switch>
            </Suspense>
          </ErrorBoundary>
        </Layout>
      </Router>
    </>
  );
};

export default App;
