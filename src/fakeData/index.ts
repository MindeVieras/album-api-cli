
export * from './fakeUsers'

import { fakeUsers } from './fakeUsers'

/**
 * Fake data object.
 */
export const fakeData = {
  Users: (total: number) => fakeUsers(total),
}
