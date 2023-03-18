#!/usr/bin/env nodei
import { getArgs } from "./get-args";
import { readFileSync } from 'fs';

/* disable system language for default messages */
process.env.LANG = "en_US.UTF-8";

const { file } = getArgs();

/**
 * @return {App.Schema}
 */
function readSchema(file) {
  try {
    const input = readFileSync(file, 'utf8');
    return JSON.parse(input);
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }
}


/**
 * @param {App.Schema} schema
 */
function removeDuplicates(schema) {

  const objectIds = new Set()
  const duplicatedObjects = []
  const sceneIds = new Set()
  const duplicatedScenes = []

  /**
   * @param {App.Schema['versions'][0]} version
   */
  const sanitizeVersion = (version) => {
    version.objects.forEach(object => {
      if (objectIds.has(object.key)) {
        duplicatedObjects.push({ ...object })
      } else {
        // ok
        objectIds.add(object.key)
      }
    })

    version.scenes.forEach(scene => {
      if (sceneIds.has(scene.key)) {
        duplicatedScenes.push({ ...scene })
      } else {
        sceneIds.add(scene.key)
      }
    })
  }

  schema.versions.forEach(sanitizeVersion)

  return { duplicatedObjects, duplicatedScenes }
}

const schema = readSchema(file);
const { duplicatedObjects, duplicatedScenes } = removeDuplicates(schema);
console.log({ duplicatedObjects, duplicatedScenes });
