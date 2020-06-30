import React from 'react';
import { Helmet } from 'react-helmet';

import { Container } from 'components/ui/general';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <section>
        <Container>
          <h1>Not found</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            nesciunt praesentium vitae. Ullam esse omnis et animi, sit modi
            nihil eaque veritatis quasi doloribus iusto accusantium non
            architecto vel aperiam.
          </p>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
