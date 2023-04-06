const headers = {
  Accept: "application/json",
  Authorization: "Bearer f-EyW8ejqqccKgA2mXPh",
};

export const fetchData = async (name: string) => {
  let params = `?name=/${name}/i&limit=9`;
  if (!name) {
    params = `?limit=9`;
  }
  const rawPersons = await fetch(
    `https://the-one-api.dev/v2/character${params}`,
    {
      headers: headers,
    }
  );
  const persons = await rawPersons.json();
  return persons;
};
