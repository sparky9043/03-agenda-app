import { Response, Router } from "express";
import taskService from '../service/task';
import { Task } from "../types/types";

const task = Router();

task.get('/', async (_req, res: Response<Task[]>) => {
  const savedTasks = await taskService.getTasks();
  res.json(savedTasks);
});

export default task;