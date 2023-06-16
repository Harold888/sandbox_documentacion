import { Router, Response, Request} from "express"
import PacienteController from "../controllers/PacienteController"

class PacienteRouter{

    router:Router
    pacienteController:PacienteController

    constructor(){
        this.router= Router()
        this.pacienteController = new PacienteController()
        this.routes()
    }

    private routes():void{
        this.router.get(
            '/pacientes',
            (req:Request, res:Response)=>{
                this.pacienteController.obtenerPacientes(req, res)
            }
        )

        this.router.post(
            '/crear_paciente',
            (req:Request, res:Response)=>{
                this.pacienteController.crearPaciente(req, res)
            }
        )
        this.router.get(
            '/actualizar_paciente/:cedula',
            (req: Request, res: Response) => this.pacienteController.obtenerPacientePorCedula(req, res)
          )

          this.router.put(
            '/actualizar_paciente/:cedula',
            (req: Request, res: Response) => this.pacienteController.actualizarPaciente(req, res)
          )          
      
          this.router.delete('/eliminar_paciente/:cedula', (req: Request, res: Response) => {
            this.pacienteController.eliminarPaciente(req, res)
          })
    }
}

export default new PacienteRouter().router