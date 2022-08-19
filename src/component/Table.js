import React, { useContext, useEffect } from 'react';
import TableContext from '../context/TableContext';
import Form from './Form';

function Table() {
  const { result, inputs, setResult, setInputs } = useContext(TableContext);

  const filterNumber = () => {
    const { btnClick, column, comparison, value } = inputs;
    if (btnClick && comparison === 'maior que') {
      const newResult = result.filter((e) => Number(e[column]) > Number(value));
      setResult(newResult);
    }
    if (btnClick && comparison === 'menor que') {
      const newResult = result.filter((e) => Number(e[column]) < Number(value));
      setResult(newResult);
    }
    if (btnClick && comparison === 'igual a') {
      const newResult = result.filter((e) => e[column] === value);
      setResult(newResult);
    }
    setInputs({
      ...inputs,
      btnClick: false,
    });
    return result;
  };

  useEffect(() => {
    filterNumber();
  }, [inputs.btnClick]);

  return (
    <div>
      <Form />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            result.map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
