<p align="right">
<a href="https://github.com/manuartero/knack-app-schema/actions/workflows/blue-ball.yaml"><img src="https://github.com/manuartero/knack-app-schema/actions/workflows/blue-ball.yaml/badge.svg" /></a>
</p>

# Knack App Schema

> Remove duplicates from Knak App schema.

## 🍿 How to Use

1. Install dependencies

```bash
npm i
```

2. Options:

```
Options:
      --version  Show version number                                   [boolean]
  -f, --file     Input file                                  [string] [required]
  -o, --output   Output path                                 [string] [required]
  -v, --verbose  Verbose mode                                          [boolean]
  -h, --help     Show help                                             [boolean]

```

> note: you will need to use `--` to pass arguments to the script

3. Example:

```bash
$» npm start -- --file ./src/assets/mock_application.json --output examples/valid_application.json --verbose

> knack-app-schema@0.1.0 start
> node --es-module-specifier-resolution=node src/index.js --file ./src/assets/mock_application.json --output examples/valid_application.json --verbose

Reading file: ./src/assets/mock_application.json

Removing duplicates & creating the new schema...

Duplicate object detected: object_4

Writing file: examples/valid_application.json
```

***

## 🚀 Available Scripts

- `blue-ball`: Create the blue-ball (linter + build + tests)
  - `lint`
  - `build`
  - `test`
- `start`: run the program

## 🥞 Dev Tech Stack

- `ts` (static checking)
- `eslint` (linter)
- `jest` (test runner)

***

## 📝 Notes

- The project is written in pure js while using ts for static checking. Check [knack-app-schema.d.ts](./src/%40types/knack-app-schema.d.ts) or this [post at dev.to](https://dev.to/manuartero/type-hints-on-pure-js-files-8ee)
- The project is using a Node's experimental feature (related ESModules). This is ok for a simple script but would review this in real prod code.
- Only 2 dependencies:
  - `yargs`: read input from terminal
  - `chalk`: coloring utils for terminal (obv. optional... but 💅)
- Good test coverage
- Main code: check index.js

```js
function run({ file, output }) {
  const f = fileUtils(log);
  const schema = f.readSchema(file);
  const { newSchema } = sanitizer(log).removeDuplicates(schema);
  f.createValidSchema(newSchema, output);
}
```

- `removeDuplicates()` returns also duplicated objects and scenes, I thought could be useful for possible future iterations (like monitoring)

- code style: using esLint + Pure object oriented style; check this [post at dev.to](https://dev.to/manuartero/yet-another-post-about-prototype-vs-class-5g4a)
