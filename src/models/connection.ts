import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createPool({
  user: process.env.MYSQL_USER || 'root',
  host: process.env.MYSQL_HOST || 'localhot',
  password: process.env.MYSQL_PASSWORD || 'password', 
});

export default connection;