import { Router, Request, Response } from "express"
import MedicoController from "../controllers/MedicoController"

class MedicoRouter{
    router : Router
    medicoController: MedicoController


    constructor(){
        this.router = Router()
        this.medicoController= new MedicoController()
        this.routes()
    }

    private routes (): void{
        this.router.get('/medicos', (req:Request, res:Response)=>{
            this.medicoController.obtenerMedicos(req, res)
        }
        )
        
        this.router.post('/crear_medico',
        (req:Request, res:Response)=>{
            this.medicoController.crearMedico(req, res)
        }
        )
        this.router.get(
            '/actualizar_medico/:tarjetaProfesional',
            (req: Request, res: Response) => this.medicoController.obtenerMedicoPorTarjetaProfesional(req, res)
          )

          this.router.put(
            '/actualizar_medico/:tarjetaProfesional',
            (req: Request, res: Response) => this.medicoController.actualizarMedico(req, res)
          )      

        this.router.delete('/eliminar_medico/:tarjetaProfesional', (req: Request, res: Response) => {
            this.medicoController.eliminarMedico(req, res)
          })
    }
}

export default new MedicoRouter().router