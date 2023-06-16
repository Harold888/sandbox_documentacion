
import { Router, Request, Response } from "express"
import CitaController from "../controllers/CitaController"

class CitaRouter{
  router: Router
  citaController: CitaController

  constructor(){
    this.router = Router()
    this.citaController = new CitaController()
    this.routes()
  }

  private routes(): void{
    this.router.get('/citas',(req:Request, res:Response)=>{
      this.citaController.obtenerCitas(req, res)
    })

    this.router.post('/crear_cita',(req:Request, res:Response)=>{
      this.citaController.crearCita(req, res)
    })
    this.router.delete('/eliminar_cita/:idCita', (req: Request, res: Response) => {
      this.citaController.eliminarCita(req, res)
    })
  }
}

export default new CitaRouter().router