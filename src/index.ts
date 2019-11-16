#!/usr/bin/env node

import './config'
import Program from './Program'

/**
 * Initialize program instance.
 */
new Program()
/**
 * Required environmental variables.
 */
// interface RequiredEnvs {
//   MONGODB_URI: string
// }
// // Make sure .env file includes MONGODB_URI variable.
// if (parsed && parsed.MONGODB_URI) {

//   /**
//    * Connect to mongodb.
//    */

// } else {
//   // Log error if .env has no MONGODB_URL variable.
//   console.log(chalk.red('You are missing MONGODB_URI variable from .env file.'))
//   process.exit()
// }
