// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import type { Item } from 'custom';
import { Container, Grid, GridColumn, Loader } from 'semantic-ui-react';
import ImageCard from '../components/ImageCard';
import ErrorMessage from '../components/ErrorMessage';

type Props = {
  loading: boolean,
  items: Array<Item>,
  error: any,
};

const ItemsPage = ({ loading, items, error }: Props): React.Node => {
  const renderPageContent = () => {
    if (loading) return <Loader active inline="centered" />;

    if (error) return <ErrorMessage />;

    return (
      <Grid centered>
        {items.map((item) => (
          <GridColumn key={item._id} computer={4} mobile={12} tablet={6}>
            <ImageCard item={item} />
          </GridColumn>
        ))}
      </Grid>
    );
  };

  return (
    <Container className="vh-60 p-2">
      <h1>Jivy Group All Items</h1>
      <p>Here we can view all our items and add them in our store !</p>
      {renderPageContent()}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  loading: state.items.loading,
  error: state.items.error,
  items: state.items.all,
});

export default (connect(mapStateToProps)(ItemsPage): React.AbstractComponent<{}>);
