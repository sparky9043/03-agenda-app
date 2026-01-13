import express from 'express';
import ping from './routers/ping.router';
import task from './routers/task.router';

const app = express();
app.use(express.json());

app.use('/ping', ping);
app.use('/api/tasks', task);

export default app;