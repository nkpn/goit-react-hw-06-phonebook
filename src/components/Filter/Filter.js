import React from 'react';
import style from './Filter.module.css';
import contactsActions from '../../redux/contacts-actions';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getFilter } from 'redux/contacts-selector';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={style.Label}>
      <p className={style.LabelText}>Filter:</p>{' '}
      <input
        type="text"
        value={value}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
        className={style.Input}
      ></input>
    </label>
  );
};

// const mapStateToProps = state => ({
//   //! Ниже ошибка
//   value: state.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: event => dispatch(actions.ChangeFilter(event.target.value)),
// });

export default Filter;
