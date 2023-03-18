import { hideBin } from 'yargs/helpers'
import yargs from "yargs";

export function getArgs() {
  /* fix yargs as esModule: https://github.com/yargs/yargs/issues/1854 */
  const yarg = yargs(hideBin(process.argv))

  const args = yarg
    .option("file", {
      demand: true,
      alias: "f",
      type: "string",
      description: "Input file",
    })
    .option("output", {
      demand: true,
      alias: "o",
      type: "string",
      description: "Output path",
    })
    .option("help", {
      alias: "h",
      type: "boolean",
      description: "Show help",
    })
    .help()
    .alias("help", "h").argv;

  return args;
}
