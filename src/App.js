import React from 'react';
import './App.css';
import Table from './component/Table';
import TableProvider from './context/TableProvider';

function App() {
  return (
    <TableProvider>
      <span>
        Hello
        <Table />
      </span>
    </TableProvider>
  );
}

export default App;
