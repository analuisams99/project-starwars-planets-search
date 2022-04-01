import React from 'react';
import FilterButton from './FilterButton';
import InputFilter from './InputFilter';
import InputNumberFilter from './InputNumberFilter';
import InputSelectColumn from './InputSelectColumn';
import InputSelectComparison from './InputSelectComparison';

function Filters() {
  return (
    <section className="filter-planets">
      <InputFilter />
      <InputSelectColumn />
      <InputSelectComparison />
      <InputNumberFilter />
      <FilterButton />
    </section>
  );
}

export default Filters;
