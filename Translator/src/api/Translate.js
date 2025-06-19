import axios from "axios";

const API_URL = process.env.REACT_APP_URL;
const HEADERS = {
  "Content-Type": "application/json",
  "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
  "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
};

export const translateText = async (text, targetLang, sourceLang) => {
  const data = {
    text,
    to: targetLang,
    from_lang: sourceLang,
  };

  try {
    const response = await axios.post(API_URL, data, { headers: HEADERS });
    return response.data;
  } catch (error) {
    console.error("Translation Error:", error);
    throw error; 
  }
};
