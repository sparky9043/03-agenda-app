import tasksRepository from "../repository/tasks.repository";
import { NewTaskEntry, Task } from "../types/types";

const getTasks = async (): Promise<Task[]>  => {
  return await tasksRepository.getTasksFromDb();
};

const getTaskById = async (id: number): Promise<Task> => {
  return await tasksRepository.getTaskByIdFromDb(id);
};

const addTask = async (newTaskObject: NewTaskEntry): Promise<Task> => {
  const { title, description, userid } = newTaskObject;
  return await tasksRepository.addTaskToDb(title, description, userid);
};

export default { getTasks, getTaskById, addTask };