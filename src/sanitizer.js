export function sanitizer(log) {
  return {
    /**
    * @param {App.Schema} schema
    */
    removeDuplicates(schema) {
      log.print(`Removing duplicates & creating the new schema...`);

      const newSchema = { ...schema }

      const objectIds = new Set()
      const duplicatedObjects = []
      const sceneIds = new Set()
      const duplicatedScenes = []

      /**
       * @param {App.Schema['versions'][0]} version
       */
      const sanitizeVersion = (version) => {
        version.objects = version.objects.filter(object => {
          if (objectIds.has(object.key)) {
            log.debug(`Duplicate object detected: ${object.key}`);
            return false
          } else {
            objectIds.add(object.key)
            return true
          }
        })
        version.scenes = version.scenes.filter(scene => {
          if (sceneIds.has(scene.key)) {
            log.debug(`Duplicate scene detected: ${scene.key}`);
            return false
          } else {
            sceneIds.add(scene.key)
            return true
          }
        })
      }

      newSchema.versions.forEach(sanitizeVersion)

      return { duplicatedObjects, duplicatedScenes, newSchema }
    }
  }
}
