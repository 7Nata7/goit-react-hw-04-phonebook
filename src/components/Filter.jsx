import css from './Filter.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ title, onFilterChange }) => {
  const handleFilterChange = event => {
    const searchQuery = event.target.value;
    onFilterChange(searchQuery);
  };

  return (
    <div>
      <h2 className={css.filter_name}>{title}</h2>
      <label>
        <input
          className={css.input}
          type="text"
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
