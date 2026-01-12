import express from 'express';
import ping from './routers/ping.router';

const app = express();
app.use(express.json());

app.use('/ping', ping);

export default app;