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

- `ts` (dev lang, transpiles to js)
- `eslint` (linter)
- `jest` (test runner)
