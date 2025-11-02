import "server-only";
import Database from "better-sqlite3";

const dbPath = "../../Storage/database.db";
const db = new Database(dbPath, {});
db.pragma("journal_mode = WAL");

export default db;
