
import Progress from 'progress'

/**
 * ProgressBar class.
 *
 * @extends Progress
 */
export default class ProgressBar extends Progress {

  constructor(format: string, options: Progress.ProgressBarOptions) {
    super(format, options)
  }

}
