// @flow
import type { ItemState, ItemAction } from 'custom';
import { ADD_ITEM_TO_STORE, REMOVE_ITEM_FROM_STORE, SET_ALL_ITEMS, SET_ERROR } from '../constants/items';

const initialState: ItemState = {
  all: [],
  store: [],
  error: false,
  loading: true,
};

export default (state: ItemState = initialState, action: ItemAction): ItemState => {
  switch (action.type) {
    case ADD_ITEM_TO_STORE:
      return {
        ...state,
        store: [...state.store, action.item],
      };
    case REMOVE_ITEM_FROM_STORE:
      return {
        ...state,
        store: state.store.filter((item) => item._id !== action.id),
      };
    case SET_ALL_ITEMS:
      return {
        ...state,
        all: [...action.allItems],
        store: [...action.storeItems],
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
