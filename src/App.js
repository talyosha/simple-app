// @flow
import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ResponsiveContainer from './components/ResponsiveContainer';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';
import ShopPage from './pages/ShopPage';
import { fetchAllItems } from './redux/actions/items';
import Footer from './components/Footer';

type Props = {
  fetchAllItems: () => void,
};

const App = ({ fetchAllItems }: Props) => {
  useEffect(() => {
    fetchAllItems();
  });

  return (
    <BrowserRouter>
      <ResponsiveContainer>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/items">
            <ItemsPage />
          </Route>
          <Route path="/store">
            <ShopPage />
          </Route>
        </Switch>
        <Footer />
      </ResponsiveContainer>
    </BrowserRouter>
  );
};

export default (connect(null, { fetchAllItems })(App): React.AbstractComponent<{}>);
