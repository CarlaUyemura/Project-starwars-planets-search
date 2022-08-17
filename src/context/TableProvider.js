import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import TableContext from './TableContext';
import apiPlanets from '../service/apiPlanets';

function TableProvider({ children }) {
  const [result, setResult] = useState([]);

  const requestApi = async () => {
    const request = await apiPlanets();
    setResult(request);
  };

  useEffect(() => {
    requestApi();
  }, []);

  const handleName = (target) => {
    const filterByName = {
      name: target,
    };
    console.log(filterByName);
    return filterByName;
  };

  return (
    <TableContext.Provider value={ { result, handleName } }>
      {children}
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default TableProvider;
