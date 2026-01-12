import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

const TEST_DATABASE_URI = process.env.TEST_DATABASE_URI;

const SECRET = process.env.SECRET_KEY;

export default { PORT, TEST_DATABASE_URI, SECRET };