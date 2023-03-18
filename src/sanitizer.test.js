/* eslint-disable @typescript-eslint/ban-ts-comment */
import { sanitizer } from "./sanitizer"

const log = {
  print: jest.fn(),
  debug: jest.fn(),
  err: jest.fn(),
}

describe('Sanitizer', () => {
  test('returns a new schema with no duplicates', () => {
    const schema = {
      "versions": [
        {
          "objects": [
            {
              "key": "object1",
              "name": "Object 1",
              "description": "Object 1 description",
              "type": "object",
              "properties": {},
            },
            {
              "key": "object2",
              "name": "Object 2",
              "description": "Object 2 description",
              "type": "object",
              "properties": {},
            },
            {
              "key": "object1",
              "name": "Object 1",
              "description": "Object 1 description",
              "type": "object",
              "properties": {},
            }
          ],
          "scenes": [
            {
              "key": "scene1",
              "name": "Scene 1",
              "description": "Scene 1 description",
              "type": "scene",
              "properties": {},
            },
            {
              "key": "scene2",
              "name": "Scene 2",
              "description": "Scene 2 description",
              "type": "scene",
              "properties": {},
            },
            {
              "key": "scene1",
              "name": "Scene 1",
              "description": "Scene 1 description",
              "type": "scene",
              "properties": {},
            }
          ]
        }
      ]
    }
    const expectedSchema = {
      "versions": [
        {
          "objects": [
            {
              "key": "object1",
              "name": "Object 1",
              "description": "Object 1 description",
              "type": "object",
              "properties": {},
            },
            {
              "key": "object2",
              "name": "Object 2",
              "description": "Object 2 description",
              "type": "object",
              "properties": {},
            }
          ],
          "scenes": [
            {
              "key": "scene1",
              "name": "Scene 1",
              "description": "Scene 1 description",
              "type": "scene",
              "properties": {},
            },
            {
              "key": "scene2",
              "name": "Scene 2",
              "description": "Scene 2 description",
              "type": "scene",
              "properties": {},
            }
          ]
        }
      ]
    }

    // @ts-ignore satisfies Schema
    const { newSchema } = sanitizer(log).removeDuplicates(schema)
    expect(newSchema).toEqual(expectedSchema)

  })
})
