// Запити З БРАУЗЕРА йдуть тільки у наші Route Handlers (app/api/*), а ті — на бекенд.
import axios from 'axios';

export const nextServer = axios.create({
  baseURL: '/api',
  withCredentials: true,
});
