declare module 'custom' {
  declare type Item = {
    name: {
      first: string,
      last: string,
    },
    picture: string,
    _id: string,
    about: string,
    balance: string,
    friends: Array<Object>,
    company: string,
  };

  declare type ItemState = {
    +all: Array<Item>,
    +store: Array<Item>,
    +error: any,
    +loading: boolean,
  };

  declare type ItemAction = {
    type: string,
    item: Item,
    allItems: Array<Item>,
    storeItems: Array<Item>,
    error: any,
    id: string,
  };
}
