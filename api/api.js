async function getNestsFromApi() {
  try {
    let response = await fetch('https://fast-anchorage-88647.herokuapp.com/transit');
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

async function postCredentials(credentials) {
  try {
    const requestOptions = {
      method: 'POST',
      // credentials: 'include',
      headers: {
	'Accept': 'Application/json',
	'Content-Type': 'multipart/form-data',
      },
      body: new URLSearchParams(`username=${credentials.username}&password=${credentials.password}`),
    };
    let response = await fetch(
      'https://fast-anchorage-88647.herokuapp.com/login-mobile',
      requestOptions );
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export {getNestsFromApi, postCredentials};
