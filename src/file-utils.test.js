/* eslint-disable @typescript-eslint/ban-ts-comment */
import { fileUtils } from "./file-utils"

jest.mock('fs', () => ({
  readFileSync: jest.fn().mockReturnValue('{"key": "value"}'),
  existsSync: jest.fn().mockReturnValue(false),
  writeFileSync: jest.fn(),
}))

const log = {
  print: jest.fn(),
  debug: jest.fn(),
  err: jest.fn(),
}

describe('fileUtils', () => {

  test('readSchema() reads the input file', () => {
    const json = fileUtils(log).readSchema('path/to/file')
    expect(json).toEqual({ key: 'value' })
  })

  test('createValidSchema() writes the output file', () => {
    // @ts-ignore satisfies Schema
    fileUtils(log).createValidSchema({ key: 'value' }, 'path/to/file')
    expect(log.print).toHaveBeenCalledWith('Done!')
  })

})
