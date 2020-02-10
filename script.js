// This function loads pokemon data from the Pokemon API
function fetchchuckJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID

  const url = `https://api.chucknorris.io/jokes/random`;
  axios
    .get(url)
    .then(response => response.data) // DIFFERENT FROM FETCH: response.data instead of response.json()
    .then(chucknorris => {
      console.log("data decoded from JSON:", chucknorris);
      // Build a block of HTML
      const chuckHtml = `
            <img src="${chucknorris.icon_url}" />
            <p><strong>${chucknorris.value}</strong></p>
          `;
      document.querySelector("#chuck-norris").innerHTML = chuckHtml;
    });
}
fetchchuckJSON();
