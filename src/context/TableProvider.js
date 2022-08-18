import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import TableContext from './TableContext';
import apiPlanets from '../service/apiPlanets';

function TableProvider({ children }) {
  const [result, setResult] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [inputs, setInputs] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
    btnClick: false,
  });
  const requestApi = async () => {
    const request = await apiPlanets();
    setResult(request);
  };

  useEffect(() => {
    if (filterByName.name) {
      setResult(result.filter((e) => e.name.includes(filterByName.name)));
    } else {
      requestApi();
    }
  }, [filterByName]);

  const handleName = (target) => {
    setFilterByName({
      name: target,
    });
  };
  const handleChanged = ({ target }) => {
    setInputs({
      ...inputs,
      [target.name]: target.value,
      btnClick: false,
    });
  };

  const filterSelect = () => {
    setInputs({
      ...inputs,
      btnClick: true,
    });
  };

  return (
    <TableContext.Provider
      value={ {
        result,
        handleName,
        filterByName,
        filterSelect,
        handleChanged,
        inputs,
        setInputs,
        setResult,
      } }
    >
      {children}
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default TableProvider;
