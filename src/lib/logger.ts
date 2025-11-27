import fs from 'fs';
import path from 'path';

const LOG_FILE = 'c:\\Users\\Lenovo\\Desktop\\universalrRender\\debug_log.txt';

export function logToFile(message: string, data?: any) {
  try {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message} ${data ? JSON.stringify(data, null, 2) : ''}\n`;
    fs.appendFileSync(LOG_FILE, logEntry);
  } catch (e) {
    // Fail silently
  }
}
