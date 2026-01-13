import { Pool } from "pg";
import config from "../utils/config";

const pool = new Pool({
  connectionString: config.TEST_DATABASE_URI,
});

export default pool;