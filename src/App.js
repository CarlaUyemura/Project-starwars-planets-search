import React from 'react';
import './App.css';
import Table from './component/Table';
import TableProvider from './context/TableProvider';

function App() {
  return (
    <TableProvider>
      <h1>
        STAR WARS
      </h1>
      <Table />
    </TableProvider>
  );
}

export default App;
