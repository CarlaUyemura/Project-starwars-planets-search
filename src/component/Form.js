import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Form() {
  const {
    handleName,
    filterSelect,
    inputs,
    handleChanged,
  } = useContext(TableContext);

  const { column, comparison, value } = inputs;

  return (
    <div>
      Form
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
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
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
          onClick={ () => filterSelect() }
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
    </div>
  );
}

export default Form;
