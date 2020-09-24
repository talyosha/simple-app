// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import type { Item } from 'custom';
import { Button, Container, Grid, List, Loader } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import StoreItem from '../components/StoreItem';
import ErrorMessage from '../components/ErrorMessage';

type Props = {
  loading: boolean,
  storeItems: Array<Item>,
  error: any,
};

const StorePage = ({ loading, storeItems, error }: Props): React.Node => {
  const storePageContent = () => {
    if (loading) return <Loader active inline="centered" />;

    if (error) return <ErrorMessage />;

    if (storeItems.length === 0)
      return (
        <Grid>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <NavLink to="/items">
                <Button size="huge">Add items</Button>
              </NavLink>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );

    return storeItems.map((item) => <StoreItem key={item._id} item={item} />);
  };

  return (
    <Container className="vh-60 p-2">
      <h1>Jivy Group Items Store</h1>
      <p>Here we have a list of added items</p>
      <List divided verticalAlign="middle">
        {storePageContent()}
      </List>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  loading: state.items.loading,
  storeItems: state.items.store,
  error: state.items.error,
});

export default (connect(mapStateToProps)(StorePage): React.AbstractComponent<{}>);
