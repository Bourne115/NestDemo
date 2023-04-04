export default (): any => (
  {
    env: process.env.APP_ENV,
    port: process.env.APP_PORT,
    database: {
      /**DB_URL */
      url: process.env.DB_URL
    }
  }
)