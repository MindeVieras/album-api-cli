
import faker from 'faker'

/**
 * Album statuses.
 */
enum MediaStatuses {

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
 * Media model properties.
 */
export interface MediaProps {
  filename: string,
  filesize: number,
  mimetype: string,
  width: number,
  height: number,
  createdAt: Date,
  updatedAt: Date,
}

/**
 * Generate fake media.
 *
 * @param {number} total
 *   Total fake media to generate.
 *
 * @returns {MediaProps[]}
 *   Array of fake media.
 */
export const fakeMedia = (total: number = 10): MediaProps[] => {

  const media: MediaProps[] = []

  // Loop through total counter.
  for (let i = 0; i < total; i++) {
    // Required user fields.
    const mediaFile: MediaProps = {
      filename: faker.internet.userName(),
      filesize: faker.random.number({ min: 1024, max: 10000000 }),
      mimetype: faker.system.mimeType(),
      width: faker.random.number({ min: 240, max: 2048 }),
      height: faker.random.number({ min: 240, max: 2048 }),
      createdAt: faker.date.past(5),
      updatedAt: faker.date.past(),
    }

    media.push(mediaFile)
  }

  return media
}
