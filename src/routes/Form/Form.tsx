/**
 * This route is just for showcase, don't follow the
 * way of styling or structure. Remove this before you
 * go into production.
 */

import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';

import { Container } from 'components/ui/general';
import { Text, Error } from 'components/ui/forms';

interface FormData {
  firstName: string;
  lastName: string;
}

const Form = () => {
  const { register, handleSubmit, errors, reset, watch } = useForm<FormData>();
  const watchFormData = watch(['firstName', 'lastName']);
  const onSubmit = handleSubmit(
    useCallback(
      ({ firstName, lastName }) => {
        console.log(firstName, lastName);
        reset();
      },
      [reset]
    )
  );

  return (
    <>
      <Helmet>
        <title>Form</title>
      </Helmet>
      <section>
        <Container>
          <div>
            <h1>Form</h1>
            <form onSubmit={onSubmit}>
              <div>
                <Text
                  name="firstName"
                  placeholder="First name"
                  ariaLabel="First name"
                  register={register}
                  validation={{ required: true }}
                />
                <Error error={errors.firstName} message="Is required" />
              </div>
              <div>
                <Text
                  name="lastName"
                  placeholder="Last name"
                  ariaLabel="Last name"
                  register={register}
                  validation={{ minLength: 2, required: true }}
                />
                <Error error={errors.lastName} message="Minimum length of 2" />
              </div>
              <div>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
          <div style={{ paddingTop: '20px' }}>
            <div>
              <b>First name:</b> {watchFormData.firstName}
            </div>
            <div>
              <b>Last name:</b> {watchFormData.lastName}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Form;
