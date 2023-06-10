import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('database connection successful')
    app.listen(config.port, () => {
      logger.info(`application listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error(err)
  }
}

main()
