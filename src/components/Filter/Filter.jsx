
import React from 'react';

import css from './Filter.module.css';

function Filter({ value, onChangeFilter }) {
  return (
    <form className={css.formlFind}>
      <label className={css.labelFind}>
        Find contacts by name
        <input className={css.inputFind} type="text" value={value} onChange={onChangeFilter} />
      </label>
    </form>
  );
};

export default Filter;