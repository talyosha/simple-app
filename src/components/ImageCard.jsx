// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import type { Item } from 'custom';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { addToStore } from '../redux/actions/items';

type OwnProps = {
  item: Item,
};

type Props = {
  ...OwnProps,
  storeIds: Array<string>,
  addToStore: (item: Item) => void,
};

const ImageCard = ({ addToStore, item, storeIds }: Props): React.Node => {
  const { picture, name, about, balance, friends, company } = item;

  const renderButton = () => {
    if (storeIds.includes(item._id)) {
      return (
        <NavLink to="/store">
          <Button className="m1">Go to store</Button>
        </NavLink>
      );
    }

    return (
      <Button positive className="m1" onClick={() => addToStore(item)}>
        Add to store
      </Button>
    );
  };

  return (
    <Card className="m1">
      <Image className="m1" src={picture} floated="right" size="mini" />
      <Card.Content>
        <Card.Header>{`${name.first} ${name.last}`}</Card.Header>
        <Card.Meta>Company {company}</Card.Meta>
        <Card.Meta>Balance {balance}</Card.Meta>
        <Card.Description>{about}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {friends.length} Friends
        </a>
        {renderButton()}
      </Card.Content>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  storeIds: state.items.store.map((e: Item) => e._id),
});

export default (connect(mapStateToProps, { addToStore })(ImageCard): React.AbstractComponent<OwnProps>);
