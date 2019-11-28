
import faker from 'faker'

/**
 * Album statuses.
 */
enum AlbumStatuses {

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
 * Album model properties.
 */
export interface AlbumProps {
  name: string,
  createdAt: Date,
  updatedAt: Date,
}

/**
 * Generate fake users.
 *
 * @param {number} total
 *   Total fake users to generate.
 *
 * @returns {AlbumProps[]}
 *   Array of fake users.
 */
export const fakeAlbums = (total: number = 10): AlbumProps[] => {

  const albums: AlbumProps[] = []

  // Loop through total counter.
  for (let i = 0; i < total; i++) {
    // Required user fields.
    const album: AlbumProps = {
      name: faker.internet.userName(),
      createdAt: faker.date.past(5),
      updatedAt: faker.date.past(),
    }

    albums.push(album)
  }

  return albums
}
