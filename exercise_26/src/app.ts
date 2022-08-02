import express from 'express';
import httpErrorMiddleware from './middleware/http.erro.middleware';
import routers from './routes';


const app = express();

app.use(express.json());
app.use(routers);
app.use(httpErrorMiddleware);

export default app;