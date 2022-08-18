import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import TableContext from './TableContext';
import apiPlanets from '../service/apiPlanets';

function TableProvider({ children }) {
  const [result, setResult] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });

  const requestApi = async () => {
    const request = await apiPlanets();
    setResult(request);
  };

  useEffect(() => {
    requestApi();
  }, []);

  const handleName = (target) => {
    setFilterByName({
      name: target,
    });
    console.log(target);
  };

  return (
    <TableContext.Provider value={ { result, handleName, filterByName } }>
      {children}
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default TableProvider;
