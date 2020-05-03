async function getNestsFromApi() {
  try {
    let response = await fetch('https://fast-anchorage-88647.herokuapp.com/transit');
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}


export {getNestsFromApi};
