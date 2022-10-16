import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export async function fetchFromAPI(url: string) {
  try {
    const res = await axios.get(`${BASE_URL}${url}`, options as any);

    if (res.status === 200) return res.data.items;

    console.error("Something went wrong!");
  } catch (e) {
    console.error(e);
  }
}
