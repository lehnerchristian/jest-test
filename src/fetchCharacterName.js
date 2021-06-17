export function fetchCharacterName(id) {
  return fetch(`https://swapi.dev/api/people/${id}`)
    .then((response) => response.json())
    .catch((e) => console.error(e));
}
