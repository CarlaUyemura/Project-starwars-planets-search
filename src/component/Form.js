import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function Form() {
  // const [name, setName] = useState('');
  const { handleName } = useContext(TableContext);
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
          onChange={ () => {} }
        >
          Coluna
          <option value="Population">Population</option>
          <option value="Orbital Period">Orbital Period</option>
          <option value="Diameter">Diameter</option>
          <option value="Rotation Period">Rotation Period</option>
          <option value="Surface Water">Surface Water</option>
        </select>
        <select
          onChange={ () => {} }
        >
          <option value="Maior que">Maior que</option>
          <option value="Menos que">Menos que</option>
          <option value="Igual a">Igual a</option>
        </select>
        <input type="number" placeholder="number" onChange={ () => {} } />
        <button type="button" onClick={ () => {} }>Filtrar</button>

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
