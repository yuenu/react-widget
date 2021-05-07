import axios from "axios";

export const Wikipedia = axios.create({
  baseURL: "https://en.wikipedia.org/w/api.php",
});
