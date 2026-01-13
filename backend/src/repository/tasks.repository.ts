import pool from "../db/pool"
import { Task } from "../types/types";

const getTasksFromDb = async (): Promise<Task[]> => {
  const response = await pool.query(
    `
      SELECT * FROM task_list;
    `
  );

  return response.rows;
}

export default { getTasksFromDb };