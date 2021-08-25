import React from 'react';
import style from './Filter.module.css';
import actions from '../../redux/contacts-actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <label className={style.Label}>
      <p className={style.LabelText}>Filter:</p>{' '}
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={style.Input}
      ></input>
    </label>
  );
};

Filter.propType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  //! Ниже ошибка
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(actions.ChangeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
