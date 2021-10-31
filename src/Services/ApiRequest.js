const baseUrl = process.env.REACT_APP_BASE_URL;

export async function GetBreedNames() {
  const res = await fetch(`${baseUrl}/allbreeds`);
  const data = await res.json();
  return data;
}

export async function GetTopBreeds() {
  const res = await fetch(`${baseUrl}/topbreeds`);
  const data = await res.json();
  return data;
}
export async function GetBreed(id) {
  const res = await fetch(`${baseUrl}/breed/${id}`);
  const data = await res.json();
  return data;
}
export async function GetBreedImages(id, limit) {
  const res = await fetch(`${baseUrl}/images?limit=${limit}&id=${id}`);
  const data = res.json();
  return data;
}
