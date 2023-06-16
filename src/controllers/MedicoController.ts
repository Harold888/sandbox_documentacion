import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";

class MedicoController {
  private prismaCliente: PrismaClient;

  constructor() {
    this.prismaCliente = new PrismaClient();
  }

  async obtenerMedicos(req: Request, res: Response) {
    const medicos = await this.prismaCliente.medico.findMany();
    res.json(medicos);
  }

  async crearMedico(req: Request, res: Response) {
    const { tarjetaProfesional, nombre, apellido, correo, consultorio, Especialidad } = req.body;

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
}

export default MedicoController;
