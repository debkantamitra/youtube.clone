import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "5fd86b5e3fmsh6504c8bf490fc00p10da2djsn91dcc8de5105",
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
