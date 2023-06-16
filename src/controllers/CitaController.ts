import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

class CitaController{
    private prismaCliente: PrismaClient

    constructor(){
        this.prismaCliente = new PrismaClient()
    }

    async obtenerCitas(req: Request, res: Response){
        const citas = await this.prismaCliente.cita.findMany()
        res.json(citas);
    }

    async crearCita(req: Request, res:Response){
        const {Medico, Paciente, fechaCita} = req.body
    try {   
            const fecha = new Date(fechaCita)
            const cita = await this.prismaCliente.cita.create({
                data: {
                    pacienteCedula: parseInt(Paciente) ,
                    medicoTarjetaProfesional: parseInt(Medico),
                    fecha
                }
            })
            res.json(cita)
        } catch (e: any) {
            res.status(400)
            res.json({ error: e.message })
        }
    }
    async eliminarCita(req: Request, res: Response) {
        try {
          const idCita = parseInt(req.params.idCita);
    
          await this.prismaCliente.cita.delete({ where: { idCita: idCita } });
          res.json({ message: 'Cita eliminada correctamente' });
        } catch (error) {
          console.error(error);
          res.status(400).json({ error: 'Error al eliminar la cita' });
        }
      }
}

export default CitaController