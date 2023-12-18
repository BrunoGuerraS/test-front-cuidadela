const URL = "http://localhost:4002/api/v1/";

export const getCharacters = async (species: string, page: number) => {
  const response = await fetch(
    `${URL}characters?species=${species}&page=${page}`

  );
  const data = await response.json();
  return data;
};

export const getCharacterById = async (id: number | string) => {
  const response = await fetch(`${URL}characters/${id}`);
  const data = await response.json();
  return data;
};
