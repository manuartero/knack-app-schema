#!/usr/bin/env nodei
import { getArgs } from "./get-args";
import { logger } from './console';
import { sanitizer } from './sanitizer';
import { fileUtils } from './file-utils';

/* disable system language for default messages */
process.env.LANG = "en_US.UTF-8";

const { file, output, verbose = false } = getArgs();
const log = logger(verbose);

run({ file, output })

function run({ file, output }) {
  const f = fileUtils(log);
  const schema = f.readSchema(file);
  const { newSchema } = sanitizer(log).removeDuplicates(schema);
  f.createValidSchema(newSchema, output);
}
