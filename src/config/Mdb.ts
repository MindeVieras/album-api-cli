
import { MongoClient, Collection, Db } from 'mongodb'

import { config } from './config'

/**
 * Database connection class.
 *
 * @extends MongoClient
 */
export class Mdb<T> extends MongoClient {

  public collection: Collection<T>

  constructor(collection: string) {
    // Initiate MongoClient.
    super(config.mongodb, {
      useUnifiedTopology: true,
    })

    // Connect to database.
    this.connect()
    // Set collection to work with.
    this.collection = this.db('album').collection(collection)
  }

}
