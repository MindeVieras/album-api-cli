
import { fakeUsers } from './fakeUsers'
import { fakeAlbums } from './fakeAlbums'
import { fakeMedia } from './fakeMedia'

/**
 * Fake data object.
 */
export const fakeData = {
  Users: (total: number) => fakeUsers(total),
  Albums: (total: number) => fakeAlbums(total),
  Media: (total: number) => fakeMedia(total),
}
