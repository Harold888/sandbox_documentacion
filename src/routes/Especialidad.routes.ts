import { Router, Request, Response } from "express"
import EspecilidadController from "../controllers/EspecilidadController"

class EspecialidadRouter{
    router: Router
    
    especialidadController : EspecilidadController

    constructor(){
        this.router = Router()
        this.especialidadController = new EspecilidadController()
        this.routes()
    }

    private routes(): void{
        this.router.get('/especialidades',(req:Request, res:Response)=>{
            this.especialidadController.obtenerEspecialidades(req, res)
        })

        this.router.post('/crear_especialidad',
        (req:Request, res:Response)=>{
            this.especialidadController.crearEspecialidad(req, res)
        }
        )
        this.router.delete('/eliminar_especialidad/:idEspecialidad', (req: Request, res: Response) => {
            this.especialidadController.eliminarEspecialidad(req, res)
          })
    }
}

export default new EspecialidadRouter().router