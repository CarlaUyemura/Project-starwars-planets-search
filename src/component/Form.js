import React, { useContext, useEffect } from 'react';
import TableContext from '../context/TableContext';

function Form() {
  const {
    handleName,
    filterSelect,
    inputs,
    handleChanged,
    columnOption,
    setColumnOption,
    filterByNumericValues,
    setFilterByNumericValues,
    setInputs,
    setResult,
    planets,
  } = useContext(TableContext);

  const filterColumn = () => {
    const newColumn = columnOption
      .filter((item) => inputs.column !== item);
    setColumnOption(
      newColumn,
    );
  };

  const deleteFilter = ({ target }) => {
    const arrayFiltred = filterByNumericValues
      .filter(({ column }) => target.name !== column);
    setFilterByNumericValues(arrayFiltred);
    setResult(planets);
  };

  const deleteAllFilters = () => {
    setFilterByNumericValues([]);
    setColumnOption([
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
    setInputs({
      column: 'population',
      comparison: 'maior que',
      value: 0,
      btnClick: false,
    });
    setResult(planets);
  };

  const { column, comparison, value } = inputs;

  useEffect(() => {
    if (filterByNumericValues.length > 0) {
      filterByNumericValues.forEach((input) => {
        setInputs({
          column: input.column,
          comparison: input.comparison,
          value: input.value,
          btnClick: true,
        });
      });
    }
  }, [filterByNumericValues.length]);

  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Planet"
          onChange={ (e) => handleName(e.target.value) }
        />
        <select
          onChange={ handleChanged }
          data-testid="column-filter"
          value={ column }
          name="column"
        >
          Coluna
          { columnOption
            .map((e, i) => <option key={ i } value={ e }>{e}</option>) }
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ handleChanged }
          value={ comparison }
          name="comparison"
        >
          Operador
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          placeholder="number"
          data-testid="value-filter"
          onChange={ handleChanged }
          value={ value }
          name="value"
        />
        <button
          type="button"
          id={ column }
          onClick={ () => {
            filterSelect();
            filterColumn();
          } }
          data-testid="button-filter"
        >
          Filtrar

        </button>

        <select
          onChange={ () => {} }
        >
          Ordenar
          <option value="Population">Population</option>
          <option value="Orbital Period">Orbital Period</option>
          <option value="Diameter">Diameter</option>
          <option value="Rotation Period">Rotation Period</option>
          <option value="Surface Water">Surface Water</option>
        </select>
        <label htmlFor="asc">
          Ascendente
          <input id="asc" type="radio" name="sort" />
        </label>
        <label htmlFor="desc">
          Descendente
          <input id="desc" type="radio" name="sort" />
        </label>
        <button type="button" onClick={ () => {} }>Ordenar</button>
      </form>
      {filterByNumericValues.map((e) => (

        <p data-testid="filter" key={ e.column }>
          {`${e.column} ${e.comparison} ${e.value}`}
          <button
            type="button"
            name={ e.column }
            onClick={ (target) => deleteFilter(target) }
          >
            X

          </button>
        </p>
      ))}
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => deleteAllFilters() }
      >
        Remover todas filtragens

      </button>
    </div>
  );
}

export default Form;
