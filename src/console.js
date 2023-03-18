import chalk from 'chalk'

/**
 * @param {boolean} debug
 */
export function logger(debug) {
  return {
    /**
     * @param {unknown[]} msg
     */
    print(...msg) {
      console.log(chalk.blue.bold(...msg))
      console.log('\n')
    },

    /**
     * @param {unknown[]} msg
     */
    debug(...msg) {
      if (debug) {
        console.log(chalk.grey(...msg))
      }
    },

    /**
     * @param {unknown[]} msg
     */
    err(...msg) {
      console.log(chalk.red.bold(...msg))
      console.log('\n')
    }
  }
}
