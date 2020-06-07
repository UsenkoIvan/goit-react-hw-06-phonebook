import types from "./types";

export const addContacts = (contact) => ({
  type: types.ADD,
  payload: { ...contact },
});

export const filterContacts = (name) => ({
  type: types.FILTER,
  payload: name,
});

export const deleteContact = (id) => ({
  type: types.DELETE,
  payload: id,
});
