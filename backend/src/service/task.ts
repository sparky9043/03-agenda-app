import tasksRepository from "../repository/tasks.repository";
import { Task } from "../types/types";

const getTasks = async (): Promise<Task[]>  => {
  return await tasksRepository.getTasksFromDb();
};

const getTaskById = async (id: number): Promise<Task> => {
  return await tasksRepository.getTaskByIdFromDb(id);
};

export default { getTasks, getTaskById };