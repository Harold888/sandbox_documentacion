/* eslint-disable linebreak-style */
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'
import App from './App'

//Crear un objeto de la calse App

const app = new App()
app.start()