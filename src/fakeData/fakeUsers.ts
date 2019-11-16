
import faker from 'faker'

/**
 * User statuses.
 */
enum UserStatuses {

  /**
   * Only admins can block and unblock users.
   */
  blocked,

  /**
   * Active, fully functional user.
   */
  active,
}

/**
 * User roles.
 */
enum UserRoles {

  /**
   * Viewer can only browse public pages.
   */
  viewer,

  /**
   * Authenticated user created by editor or admin.
   */
  authed,

  /**
   * Super user that has full access to the system.
   */
  admin,
}

/**
 * User model properties.
 */
export interface UserProps {
  email?: string,
  displayName?: string,
  lastLogin?: Date,
  username: string,
  hash: string,
  locale: string,
  createdBy: string,
  role: UserRoles,
  status: UserStatuses,
  createdAt: Date,
  updatedAt: Date,
}

/**
 * Generate fake users.
 *
 * @param {number} total
 *   Total fake users to generate.
 *
 * @returns {UserProps[]}
 *   Array of fake users.
 */
export const fakeUsers = (total: number = 10): UserProps[] => {

  const users: UserProps[] = []

  // Loop through total counter.
  for (let i = 0; i < total; i++) {
    // Required user fields.
    const user: UserProps = {
      username: faker.internet.userName(),
      hash: faker.internet.password(),
      locale: faker.random.locale(),
      createdBy: faker.internet.userName(),
      status: faker.random.number({ min: 0, max: 1 }),
      role: faker.random.number({ min: 0, max: 2 }),
      createdAt: faker.date.past(5),
      updatedAt: faker.date.past(),
    }

    users.push(user)
  }

  // Randomize fake password fields.
  for (let step = 0; step < getRandomFieldIndex(total); step++) {
    users[Math.floor(Math.random() * total)].email = faker.internet.email()
  }
  // Randomize fake displayName fields.
  for (let step = 0; step < getRandomFieldIndex(total); step++) {
    users[Math.floor(Math.random() * total)].displayName = faker.name.findName()
  }
  // Randomize fake lastLogin fields.
  for (let step = 0; step < getRandomFieldIndex(total); step++) {
    users[Math.floor(Math.random() * total)].lastLogin = faker.date.past(2)
  }

  return users
}

/**
 * Generate random number based on total items.
 *
 * @param total
 *   Total items.
 */
function getRandomFieldIndex(total: number): number {
  // Give it a descent random number to populate half or more of total.
  return Math.floor(Math.random() * (total - 1)) + (total / 2)
}
