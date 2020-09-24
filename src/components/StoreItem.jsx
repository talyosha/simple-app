// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import type { Item } from 'custom';
import { Button, Image, List } from 'semantic-ui-react';
import { removeFromStore } from '../redux/actions/items';

type OwnProps = {
  item: Item,
};

type Props = {
  ...OwnProps,
  removeFromStore: (id: string) => void,
};

const StoreItem = ({ item, removeFromStore }: Props) => {
  const { name, picture, _id } = item;

  return (
    <List.Item>
      <List.Content floated="right">
        <Button negative onClick={() => removeFromStore(_id)}>
          Remove
        </Button>
      </List.Content>
      <Image avatar src={picture} />
      <List.Content>{`${name.first} ${name.last}`}</List.Content>
    </List.Item>
  );
};

export default (connect(null, { removeFromStore })(StoreItem): React.AbstractComponent<OwnProps>);
