#!/usr/bin/env nodei
import { getArgs } from "./get-args";
import { logger } from './console';
import { sanitizer } from './sanitizer';
import { fileReader } from './file-reader';
/* disable system language for default messages */
process.env.LANG = "en_US.UTF-8";

const { file, output, verbose = false } = getArgs();
const log = logger(verbose);

run({ file, output })

function run({ file, output }) {
  const schema = fileReader(log).readSchema(file);
  const { duplicatedObjects, duplicatedScenes } = sanitizer(log).removeDuplicates(schema);
  console.log(duplicatedObjects)
  console.log(duplicatedScenes)
  console.log(output)
}
