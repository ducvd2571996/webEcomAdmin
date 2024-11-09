import axios from "axios";

const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjIzNTNhNDM1NzRhYjQ2MTY5NmMxNzEwMjA3MmQ2OSIsIm5iZiI6MTcyNDU3NzIzNC4yODQ3MDYsInN1YiI6IjY1ZmYxM2RmMDQ3MzNmMDE3ZGVjYmZjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tUZD5nhN3vJrZ8l9g0FIT_dUZrBJXmQywRqvNjOc9nQ"; // Thay bằng Bearer Token của bạn
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularTVShows = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/popular`, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`, // Thêm Bearer Token vào header
      },
    });
    return response.data.results; // Trả về danh sách TV shows
  } catch (error) {
    console.error("Error fetching popular TV shows:", error);
    return [];
  }
};
