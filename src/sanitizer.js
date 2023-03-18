export function sanitizer(log) {
  return {
    /**
    * @param {App.Schema} schema
    */
    removeDuplicates(schema) {
      log.print(`Removing duplicates...`);

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
            log.debug(`Duplicate object detected: ${object.key}`);
            duplicatedObjects.push({ ...object })
          } else {
            // ok
            objectIds.add(object.key)
          }
        })

        version.scenes.forEach(scene => {
          if (sceneIds.has(scene.key)) {
            log.debug(`Duplicate scene detected: ${scene.key}`);
            duplicatedScenes.push({ ...scene })
          } else {
            sceneIds.add(scene.key)
          }
        })
      }

      schema.versions.forEach(sanitizeVersion)

      return { duplicatedObjects, duplicatedScenes }
    }
  }
}
