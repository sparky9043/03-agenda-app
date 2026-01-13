import tasksRepository from "../repository/tasks.repository";
import { Task } from "../types/types";

const getTasks = async (): Promise<Task[]>  => {
  return await tasksRepository.getTasksFromDb();
}

export default { getTasks };