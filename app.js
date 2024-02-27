const axios = require("axios");

async function translateText() {
  const encodedParams = new URLSearchParams();
  encodedParams.set("type", "translate");
  encodedParams.set("text", "Hello, how are you today?");
  encodedParams.set("reverse", "false");

  const options = {
    method: "POST",
    url: "https://english-to-spanish-translation-api.p.rapidapi.com/rapidapi/english-to-spanish-translation/",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "55090afa39mshe08d3559cddfd24p1ba956jsn2c8ca6f1bb06",
      "X-RapidAPI-Host": "english-to-spanish-translation-api.p.rapidapi.com",
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error.response.data);
  }
}

// Call the translateText function
translateText();
