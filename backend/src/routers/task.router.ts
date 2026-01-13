import { Request, Response, Router } from "express";
import taskService from '../service/task';
import { NewTaskEntry, Task } from "../types/types";

const task = Router();

task.get('/', async (_req, res: Response<Task[]>) => {
  const savedTasks = await taskService.getTasks();
  res.json(savedTasks);
});

task.get('/:id', async (req: Request<{ id: string }>, res: Response<Task>) => {
  const savedTask = await taskService.getTaskById(Number(req.params.id));
  res.json(savedTask);
});

task.post('/', async (req: Request<unknown, unknown, NewTaskEntry>, res: Response<Task>) => {
  const savedTask = await taskService.addTask(req.body);
  res.status(201).json(savedTask);
});

export default task;