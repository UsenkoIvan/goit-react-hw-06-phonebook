import types from "./types";
import { combineReducers } from "redux";

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

const contactsReducer = (state = initialState.contacts, { type, payload }) => {
  switch (type) {
    case types.ADD:
      const isNameExist = state.find(({ name }) => name === payload.name);
      if (isNameExist) {
        alert("Name is Exist =)");
        return state;
      }
      return [...state, payload];
    case types.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = initialState.filter, { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
