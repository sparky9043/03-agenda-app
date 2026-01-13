import pool from "../db/pool"

const getTasksFromDb = async () => {
  const response = await pool.query(
    `
      SELECT * FROM task_list;
    `
  );

  return response.rows;
}

export default { getTasksFromDb };