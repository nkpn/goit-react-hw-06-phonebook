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

export default { AddContact, deleteContact };
