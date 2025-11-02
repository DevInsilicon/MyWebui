import "server-only";
import Database from "better-sqlite3";
import { mkdirSync } from "fs";
import { dirname } from "path";

const dbPath = "./Storage/database.db";
mkdirSync(dirname(dbPath), { recursive: true });

const db = new Database(dbPath, {});
db.pragma("journal_mode = WAL");

export default db;