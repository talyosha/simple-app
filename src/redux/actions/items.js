import axios from 'axios';
import { ADD_ITEM_TO_STORE, REMOVE_ITEM_FROM_STORE, SET_ALL_ITEMS, SET_ERROR } from '../constants/items';

export const fetchAllItems = () => {
  return async (dispatch) => {
    try {
      const allItems = await axios.get('https://next.json-generator.com/api/json/get/Eku7UDxq8');
      const storeItems = await axios.get('https://next.json-generator.com/api/json/get/EJ1Lrvg98');

      dispatch(setAllItems([...allItems.data, ...storeItems.data], storeItems.data));
    } catch (e) {
      dispatch(setError(e));
    }
  };
};

export const setAllItems = (allItems, storeItems) => ({
  type: SET_ALL_ITEMS,
  allItems,
  storeItems,
});

export const addToStore = (item) => ({
  type: ADD_ITEM_TO_STORE,
  item,
});

export const removeFromStore = (id) => ({
  type: REMOVE_ITEM_FROM_STORE,
  id,
});

export const setError = (error) => ({
  type: SET_ERROR,
  error,
});
