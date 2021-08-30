import React from 'react';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';
import actions from '../../redux/contacts-actions';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts-selector';
import contactsActions from '../../redux/contacts-actions';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const deleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
    <div className={style.Contacts__container}>
      <ul className={style.Contact__list}>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={style.Contact__item}>
              {contact.name} : {contact.number}
              <button
                type="button"
                onClick={() => {
                  deleteContact(contact.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// const mapStateToProps = state => {
//   const { contacts, filter } = state;

//   const visibleContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );
//   return { contacts: visibleContacts };
// };

// const mapDispatchToProps = dispatch => ({
//   deleteContact: id => dispatch(actions.deleteContact(id)),
// });

// ContactList.propTypes = {
//   contacts: PropTypes.oneOfType([
//     PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//       }),
//     ),
//     PropTypes.array,
//   ]),
//   deleteContact: PropTypes.func.isRequired,
// };

export default ContactList;
