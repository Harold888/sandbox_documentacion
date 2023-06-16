import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";

class EspecialidadController{
    private prismaCliente: PrismaClient

    constructor(){
        this.prismaCliente = new PrismaClient();
    }

    async obtenerEspecialidades (req: Request, res:Response){
        const especialidades = await this.prismaCliente.especialidad.findMany()
        res.json(especialidades)
    }

    async crearEspecialidad(req:Request, res:Response){
        const {nombre} = req.body

        try{
            const especialidad = await this.prismaCliente.especialidad.create({
                data: {
                    nombre
                }
            })
            res.json({message: 'Especialidad creada correctamente'})

        } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear la especialidad' });
    }
    }

    async eliminarEspecialidad(req: Request, res: Response) {
        try {
          const idEspecialidad = parseInt(req.params.idEspecialidad);
    
          await this.prismaCliente.especialidad.delete({ where: { idEspecialidad: idEspecialidad } });
          res.json({ message: 'Especialidad eliminada correctamente' });
        } catch (error) {
          console.error(error);
          res.status(400).json({ error: 'Error al eliminar la especialidad' });
        }
      }
      async obtenerEspecialidadPorId(req: Request, res: Response) {
        try {
          const idEspecialidad = parseInt(req.params.idEspecialidad);
          const especialidad = await this.prismaCliente.especialidad.findUnique({ where: { idEspecialidad } });
      
          if (especialidad) {
            res.json(especialidad);
          } else {
            res.status(404).json({ message: 'Especialidad no encontrada' });
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Error al obtener la especialidad' });
        }
      }
      
      async actualizarEspecialidad(req: Request, res: Response) {
        const { idEspecialidad } = req.params;
        const { nombre } = req.body;
      
        try {
          const especialidad = await this.prismaCliente.especialidad.update({
            where: { idEspecialidad: parseInt(idEspecialidad) },
            data: {
              nombre,
            },
          });
      
          res.json({ message: 'Especialidad actualizada correctamente' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error al actualizar la especialidad' });
        }
      } 
}


export default EspecialidadController