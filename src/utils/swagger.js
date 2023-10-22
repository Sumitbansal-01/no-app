const { swaggerUi, swaggerJsdoc , dotenv} = require("../config/importModulesConfig")
dotenv()
const port = process.env.PORT
if (!port) {
    throw new Error("port is not loaded from .env file")
}

function swaggerDocs(app) {

  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'no-app',
        version: '1.0.0',
      },
      servers: [{
        url: `http://localhost:${port}`
      }]
    },
    apis: [__dirname + "/../apis/documentation/*.js"]
  }

  const swaggerSpec = swaggerJsdoc()(options)

  app.use('/docs', swaggerUi().serve, swaggerUi().setup(swaggerSpec))

  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    return res.send(swaggerSpec)
  })
}

module.exports = swaggerDocs