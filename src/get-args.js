import { hideBin } from 'yargs/helpers'
import yargs from "yargs";

/**
 * @return {App.Args}
 */
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
    .option("verbose", {
      alias: "v",
      type: "boolean",
      description: "Verbose mode",
    })
    .option("help", {
      alias: "h",
      type: "boolean",
      default: false,
      description: "Show help",
    })
    .help()
    .alias("help", "h").argv;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return args;
}
