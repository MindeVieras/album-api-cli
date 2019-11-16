
import program from 'commander'

import pkg from '../package.json'
import { Seed } from './commands'

/**
 * Main Program class.
 */
export default class Program extends program.Command {

  constructor() {
    super()

    // Set program version and description.
    this.version(pkg.version, '-v, --version', 'Show Album CLI tool version.')
    this.description(pkg.description)

    // Run commands.
    this.seedCommand()

    // Check if valid command is provided.
    if (!process.argv.slice(2).length || !/[sd]/.test(process.argv0.slice(2))) {
      this.outputHelp()
      process.exit()
    }

    /**
     * Parse 'argv' into an array.
     */
    this.parse(process.argv)

  }

  /**
   * Database seeding command.
   */
  public seedCommand() {
    this
      .command('seed')
      .alias('s')
      .description('Generate dummy data for Album.')
      .action(async () => {
        await new Seed().run()
      })
  }
}
