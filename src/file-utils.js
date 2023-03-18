import { existsSync, readFileSync, unlinkSync, writeFileSync } from "fs";

export function fileUtils(log) {
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

    /**
     * @param {App.Schema} schema
     * @param {string} output
     */
    createValidSchema(schema, output) {
      log.print(`Writing file: ${output}`);
      if (existsSync(output)) {
        unlinkSync(output);
      }

      try {
        const outputJson = JSON.stringify(schema, null, 2)
        writeFileSync(output, outputJson, 'utf8');
        log.print(`Done!`);
      }
      catch (err) {
        log.err(`Error writing file: ${output}`, err);
        process.exit(1);
      }
    }
  }
}
