#!/usr/bin/env nodei
import { getArgs } from "./get-args";

/* disable system language for default messages */
process.env.LANG = "en_US.UTF-8";

const args = getArgs();

console.log({ args });
