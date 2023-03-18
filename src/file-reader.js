import { readFileSync } from "fs";

export function fileReader(log) {
  return {
    /**
    * @param {import("fs").PathOrFileDescriptor} file
    * @return {App.Schema}
    */
    readSchema(file) {
      log.print(`Reading file: ${file}`);
      try {
        const input = readFileSync(file, 'utf8');
        return JSON.parse(input);
      }
      catch (err) {
        log.err(`Error reading file: ${file}`);
        process.exit(1);
      }
    },
  }
}
