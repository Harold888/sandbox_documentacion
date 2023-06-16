import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";

class MedicoController {
  private prismaCliente: PrismaClient

  constructor() {
    this.prismaCliente = new PrismaClient()
  }

  async obtenerMedicos(req: Request, res: Response) {
    const medicos = await this.prismaCliente.medico.findMany()
    res.json(medicos);
  }

  async crearMedico(req: Request, res: Response) {
    const { tarjetaProfesional, nombre, apellido, correo, consultorio, Especialidad } = req.body

    try {
      const medico = await this.prismaCliente.medico.create({
        data: {
          tarjetaProfesional: parseInt(tarjetaProfesional),
          nombre,
          apellido,
          correo,
          consultorio,
          idEspecialidad: parseInt(Especialidad),
        },
      });

      res.json({message: 'Médico creado correctamente'})
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el médico' });
    }
  }

  async obtenerEspecialidades(req: Request, res: Response) {
    try {
      const especialidades = await this.prismaCliente.especialidad.findMany();
      res.json(especialidades);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener las especialidades' });
    }
  }

  async eliminarMedico(req: Request, res: Response) {
    try {
      const medicoId = parseInt(req.params.tarjetaProfesional);

      await this.prismaCliente.medico.delete({ where: { tarjetaProfesional: medicoId } });
      res.json({ message: 'Médico eliminado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Error al eliminar el médico' });
    }
  }
  async obtenerMedicoPorTarjetaProfesional(req: Request, res: Response) {
    try {
      const tarjetaProfesional = req.params.tarjetaProfesional;
      const medico = await this.prismaCliente.medico.findUnique({ where: { tarjetaProfesional: parseInt(tarjetaProfesional) } });
  
      if (medico) {
        res.json(medico);
      } else {
        res.status(404).json({ message: 'Médico no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener el médico' });
    }
  }
   async actualizarMedico(req: Request, res: Response) {
    const { tarjetaProfesional } = req.params;
    const { nombre, apellido, correo, consultorio, especialidad } = req.body;

    try {
      const medico = await this.prismaCliente.medico.update({
        where: { tarjetaProfesional: parseInt(tarjetaProfesional) },
        data: {
          nombre,
          apellido,
          correo,
          consultorio,
          idEspecialidad: parseInt(especialidad),
        },
      });

      res.json({ message: 'Médico actualizado correctamente' })
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el médico' })
    }
  }
}

export default MedicoController;
