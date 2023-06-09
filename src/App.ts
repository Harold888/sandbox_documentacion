/* eslint-disable linebreak-style */
import express, { Application, Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'
import { error } from 'console'
import PacienteRouter from './routes/PacienteRouter'
/**
 *  Clase principal de la API, Define las rutas de la API
 // eslint-disable-next-line linebreak-style
 * @author Harold Ramirez
 * @description Clase inicial de ejemplo para manejar rutas y documentacuib
 */
class App {
//Atributos
	public app: any
	private server: any
	

	constructor() {
		/**
     * Express es la biblioteca para definir API en el ecositema de Node.js
     */
		this.app = express()
		this.app.use(express.json())
		this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
		this.routes()
	}
	
	/**
	 * Definbir y agregar las rutas de la API con express
	 */
	private routes(): void {
		this.app.use('/',PacienteRouter)
	}

	public start():void {
		this.server = this.app.listen(3000, () => {
			console.log('El servidor esta escuchando en el puerto 3000')
		})
	}
	public close(): void {
		this.server.close()
	}
}

export default App