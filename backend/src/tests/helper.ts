import pool from "../db/pool";
import { Task } from "../types/types";

// task helper
const defaultTasks = [
  {
    title: 'cleaning',
    description: 'clean your room',
    userid: 1,
  },
  {
    title: 'eating',
    description: 'do not forget to eat lunch',
    userid: 2,
  },
  {
    title: 'workout',
    description: 'go workout at the gym',
    userid: 1,
  },
];

const resetTasks = async () => {
  await pool.query(
    'TRUNCATE TABLE task_list RESTART IDENTITY;'
  );
};

const addTask = async (title: string, description: string, userid: number) => {
  await pool.query(
    `
      INSERT INTO task_list (title, description, userid) VALUES
      ($1, $2, $3);
    `,
    [title, description, Number(userid)],
  );
};

const tasksInDb = async (): Promise<Task[]> => {
  return await pool.query<Task>(
    `
      SELECT * FROM task_list;
    `
  ).then(response => response.rows);
};

export default {
  defaultTasks,
  resetTasks,
  addTask,
  tasksInDb,
};