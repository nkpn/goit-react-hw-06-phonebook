import shortid from 'shortid';
import types from './contacts-types';

const AddContact = newContact => ({
  type: types.ADD,
  payload: {
    id: shortid(),
    newContact,
  },
});

const deleteContact = contact => ({
  type: types.DELETE,
  payload: contact,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { AddContact, deleteContact };
