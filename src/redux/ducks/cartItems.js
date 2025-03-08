const ADD_ITEM = "add_item";
const REMOVE_ITEM = "remove_item";

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (index) => ({
  type: REMOVE_ITEM,
  payload: index,
});

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };

    case REMOVE_ITEM:
      return {
        ...state,
        items: state?.items?.filter((_, index) => index !== action.payload),
      };

    default:
      return state;
  }
};
