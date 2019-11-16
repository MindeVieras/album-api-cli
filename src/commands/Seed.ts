
import chalk from 'chalk'
import { prompt } from 'inquirer'

import { Mdb } from '../config'
import ProgressBar from '../ProgressBar'
import { fakeData, UserProps } from '../fakeData'

const Collections = ['Users', 'Albums', 'Media']

enum CollectionNames {
  Users = 'Users',
  Albums = 'Albums',
  Media = 'Media',
}

/**
 * Seed command user input interface.
 */
interface SeedInputProps {
  collectionName: CollectionNames,
  total: number,
}

export class Seed {

  private minItems = 1
  private maxItems = 100000

  /**
   * Gets user input.
   *
   * Firstly ask for collection to seed,
   * then ask how many documents to generate.
   */
  private async getInput(): Promise<SeedInputProps> {

    // 1. Ask to select a collection name to seed.
    const { collectionName } = await prompt({
      type: 'list',
      name: 'collectionName',
      message: chalk.magenta('What collection would you like to seed?'),
      choices: Collections,
    })

    // 2. How many documents to generate?
    const { total } = await prompt({
      type: 'number',
      name: 'total',
      message: chalk.magenta(`How many ${collectionName} would you like to generate?`),
      validate: (input) => {
        if (input >= this.minItems && input <= this.maxItems) {
          return true
        } else if (input > this.maxItems) {
          return `You cannot generate more than a ${this.maxItems} ${collectionName} in a single seed.`
        }

        return `Must be a number from ${this.minItems} to ${this.maxItems}.`
      },
    })

    return { collectionName, total }
  }

  /**
   * Run seeder.
   */
  public async run(): Promise<void> {

    try {

      // Get user input.
      const { collectionName, total } = await this.getInput()

      const bar = new ProgressBar(':bar', { total })
      const db = new Mdb(collectionName)

      // Insert documents.
      const fakeDocumentsData: UserProps[] = fakeData.Users(total)
      for (let i = 0; i < fakeDocumentsData.length; i++) {
        const document = fakeDocumentsData[i]
        await db.collection.insertOne(document)
        bar.tick()
      }

      // Close database connection after seeding is copleted.
      await db.close()

      console.log(chalk.green(`Generated ${total} ${collectionName}`))
      process.exit()
    }
    catch (err) {
      console.log(err)
      process.exit()
    }
  }

}
