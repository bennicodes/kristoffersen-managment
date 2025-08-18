import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'bfsn0mcr',
    dataset: 'production',
  },
  studioHost: 'kristoffersenmgmt',
  autoUpdates: true,
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
})
