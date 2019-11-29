
import faker from 'faker'

/**
 * User status.
 */
enum UserStatus {
  /**
   * Only admins can block and unblock users.
   */
  blocked = 'blocked',

  /**
   * Active, fully functional user.
   */
  active = 'active',
}

/**
 * User roles.
 */
enum UserRoles {
  /**
   * Viewer can only browse Album.
   */
  viewer = 'viewer',

  /**
   * Authenticated user created by editor or admin.
   */
  authed = 'authed',

  /**
   * Super user that has full access to the system.
   */
  admin = 'admin',
}

/**
 * User model properties.
 */
export interface UserProps {
  username: string
  hash: string
  email?: string
  displayName?: string
  locale?: string
  role: UserRoles
  status: UserStatus
  lastLogin?: Date
  createdAt: Date
  updatedAt: Date
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

  // Loop counter.
  for (let i = 0; i < total; i++) {
    // Required user fields.
    const user: UserProps = {
      username: faker.internet.userName(),
      hash: faker.random.uuid(),
      role: faker.random.arrayElement(Object.values(UserRoles)),
      status: faker.random.arrayElement(Object.values(UserStatus)),
      createdAt: faker.date.past(5),
      updatedAt: faker.date.past(),
    }

    users.push(user)
  }

  // Randomize fake email fields.
  for (let step = 0; step < getRandomFieldIndex(total); step++) {
    users[Math.floor(Math.random() * total)].email = faker.internet.email()
  }
  // Randomize fake displayName fields.
  for (let step = 0; step < getRandomFieldIndex(total); step++) {
    users[Math.floor(Math.random() * total)].displayName = faker.name.findName()
  }
  // Randomize fake locale fields.
  for (let step = 0; step < getRandomFieldIndex(total); step++) {
    users[Math.floor(Math.random() * total)].locale = faker.random.locale()
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
