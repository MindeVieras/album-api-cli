
/**
 * Seed questions.
 */
export const seedQuestions = [
  {
    type: 'input',
    name: 'environment',
    default: 'dev',
    message: 'Enter environment name ...',
  },
  {
    type: 'input',
    name: 'host',
    message: 'Enter host ...',
  },
  {
    type: 'input',
    name: 'user',
    message: 'Enter user ...',
  },
  {
    type: 'input',
    name: 'key_pair',
    message: 'Enter ssh key pair path ...',
  },
  {
    type: 'input',
    name: 'dest_path',
    message: 'Enter destination path ...',
  },
  {
    type: 'input',
    name: 'port',
    default: '22',
    message: 'Enter port number ...',
  },
]
