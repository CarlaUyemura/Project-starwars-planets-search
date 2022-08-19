import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import mockPlanets from './mockPlanets';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockPlanets),
  });
});
afterEach(() => {
  jest.resetAllMocks();
});
test('Verfica se realizada a requisição a api e se o layout é renderizado', async () => {
  render(<App />);
  await waitFor(()=>  expect(fetch).toHaveBeenCalled())
  const theadTableName = ['Name',	'Rotation Period',	'Orbital Period',	'Diameter',	'Climate',	'Gravity',	'Terrain',	'Surface Water',	'Population',	'Films',	'Created',	'Edited',	'URL']
  screen.logTestingPlaygroundURL();
  const theadTable = screen.getAllByRole("columnheader");
  theadTableName.forEach((e, i) => {
    expect(theadTable[i]).toHaveTextContent(e)
  })
  const btnFilter = screen.getByRole('button', { name: /filtrar/i });
  const radioAsc = screen.getByRole('radio', { name: /ascendente/i });
  const radioDesc = screen.getByRole('radio', { name: /descendente/i });
  const filterInputName = screen.getByTestId("name-filter");
  const filterColumn = screen.getByTestId("column-filter");
  const filterComparison = screen.getByTestId("comparison-filter");
  const filterValue = screen.getByTestId("value-filter");

  const test = [btnFilter, radioAsc, radioDesc, filterColumn, filterComparison, filterInputName, filterValue];

  test.forEach((e) => expect(e).toBeInTheDocument());

  const cellPlanets = screen.getAllByRole("cell");

  expect(cellPlanets).toHaveLength(130)

  const firstLine = screen.getAllByRole("row");

  const text = "Alderaan2436412500temperate1 standardgrasslands, mountains402000000000https://swapi-trybe.herokuapp.com/api/films/1/https://swapi-trybe.herokuapp.com/api/films/6/2014-12-10T11:35:48.479000Z2014-12-20T20:58:18.420000Zhttps://swapi-trybe.herokuapp.com/api/planets/2/";

  expect(firstLine[2]).toHaveTextContent(text)
});
// test('I am your test', () => {
//   render(<App />);
  
//   // expect().toBeInTheDocument();
// });
