// @flow
import * as React from 'react';
import { Container, Divider, Header, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const HomePage = (): React.Node => (
  <>
    <Segment className="p-5" vertical>
      <Container text>
        <Header as="h3" className="fs-2">
          All items page
        </Header>
        <p className="fs-1">
          I have created a page with items with data from https://next.json-generator.com/api/json/get/Eku7UDxq8, with
          'Add' button for adding objects in store.
        </p>
        <p className="fs-1">
          Additional I added to this page the objects from the second link , for ability to add them again then we
          delete one of them from store
        </p>
        <NavLink to="/items" as="a" className="ui large button">
          Watch page
        </NavLink>

        <Divider as="h4" className="header mt3" horizontal>
          <NavLink to="/store">STORE</NavLink>
        </Divider>

        <Header as="h3" className="fs-2">
          Store Page
        </Header>
        <p className="fs-1">
          I initialize the store page with following data from https://next.json-generator.com/api/json/get/Eku7UDxq8 .
          On this page user has possibility to delete item, clicking Delete button.
        </p>
        <NavLink to="/store" as="a" className="ui large button">
          Watch store page
        </NavLink>
      </Container>
    </Segment>
  </>
);

export default HomePage;
