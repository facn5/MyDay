export const API_BASE = "http://history.muffinlabs.com/date/01/01"

const checkResponse = response => {
  if (response.status != 200) {
    console.log((`Error with the request ${response.status}`));
    return;
  }
  return response.json();
}

export const getData = url => {
  return fetch(`${url}`)
  .then(checkResponse)
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    throw new Error (`fetch getUserData failed ${err}`);
  })
}
