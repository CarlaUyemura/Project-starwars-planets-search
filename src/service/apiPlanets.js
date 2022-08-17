const apiPlanets = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const response = await fetch(url);
  const obj = await response.json();
  const result = obj.results.map(({ residents, ...rest }) => rest);

  return result;
};

export default apiPlanets;
