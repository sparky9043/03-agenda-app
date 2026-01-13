import { Request, Response, Router } from "express";
import taskService from '../service/task';
import { Task } from "../types/types";

const task = Router();

task.get('/', async (_req, res: Response<Task[]>) => {
  const savedTasks = await taskService.getTasks();
  res.json(savedTasks);
});

task.get('/:id', async (req: Request<{ id: string }>, res: Response<Task>) => {
  const savedTask = await taskService.getTaskById(Number(req.params.id));
  res.json(savedTask);
});

task.post('/', (_req, res) => {
  // const savedTask = await taskService.addTask(req.body);
  res.status(201).json({ success: 'success' });
});

export default task;