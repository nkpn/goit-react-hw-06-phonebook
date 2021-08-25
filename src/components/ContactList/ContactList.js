import React from 'react';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';
import actions from '../../redux/contacts-actions';
import { connect } from 'react-redux';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={style.Contacts__container}>
      <ul className={style.Contact__list}>
        {contacts &&
          contacts.map(contact => {
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

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ ContactList: { contacts, filter } }) => {
  return { contacts: getVisibleContacts(contacts, filter) };
};

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(actions.deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    PropTypes.array,
  ]),
  deleteContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
