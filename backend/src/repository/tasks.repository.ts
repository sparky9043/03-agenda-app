import pool from "../db/pool";
import { Task } from "../types/types";

const getTasksFromDb = async (): Promise<Task[]> => {
  const response = await pool.query<Task>(
    `
      SELECT * FROM task_list;
    `
  );

  return response.rows;
};

const getTaskByIdFromDb = async (id: number): Promise<Task> => {
  const response = await pool.query<Task>(
    `
      SELECT * FROM task_list WHERE id = $1;
    `,
    [Number(id)],
  );

  if (!response?.rows || response?.rows.length === 0) {
    throw new Error('task not found');
  }

  return response.rows[0];
};

const addTaskToDb = async (title: string, description: string, userid: number): Promise<Task> => {
  const response = await pool.query<Task>(
    `
      INSERT INTO task_list (title, description, userid) VALUES
      ($1, $2, $3) RETURNING *;
    `,
    [title, description, Number(userid)],
  );

  if (!response?.rows) {
    throw new Error('task could not be added');
  }

  return response.rows[0];
};

export default { getTasksFromDb, getTaskByIdFromDb, addTaskToDb };