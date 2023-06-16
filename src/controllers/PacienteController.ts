import { Router, Response, Request } from 'express'
import { PrismaClient, Paciente } from '@prisma/client'

class PacienteController {
  private prismaClient: PrismaClient

  constructor() {
    this.prismaClient = new PrismaClient()
  }

  async obtenerPacientes(req: Request, res: Response) {
    const pacientes = await this.prismaClient.paciente.findMany()
    res.json(pacientes)
  }

  async crearPaciente(req: Request, res: Response) {
    try {
      const { cedula, nombre, apellido, fecha, telefono } = req.body;

      const fechaNacimiento = new Date(fecha)
      const paciente = await this.prismaClient.paciente.create({
        data: {
          cedula: parseInt(cedula),
          nombre,
          apellido,
          fechaNacimiento,
          telefono,
        },
      })
      res.json({message: 'Paciente creado correctamente'})
    } catch (e: any) {
      res.status(400)
      res.json({ error: e.message })
    }
  }

  async actualizarPaciente(req: Request, res: Response) {
    try {
      const pacienteId = parseInt(req.params.cedula)
      const { cedula, nombre, apellido, fecha, telefono } = req.body;

      const fechaNacimiento = new Date(fecha)
      const paciente = await this.prismaClient.paciente.update({
        where: { cedula: pacienteId },
        data: {
          cedula: parseInt(cedula),
          nombre,
          apellido,
          fechaNacimiento,
          telefono,
        },
      });
      res.json(paciente)
    } catch (e: any) {
      res.status(400)
      res.json({ error: e.message })
    }
    console.log(req.body)
  }

  async eliminarPaciente(req: Request, res: Response) {
    try {
      const pacienteId = parseInt(req.params.cedula)

      await this.prismaClient.paciente.delete({ where: { cedula: pacienteId } })
      res.json({ message: 'Paciente eliminado correctamente' })
    } catch (e: any) {
      res.status(400)
      res.json({ error: e.message })
    }
    
  }
  async obtenerPacientePorCedula(req: Request, res: Response) {
    try {
      const cedula = req.params.cedula;
      const paciente = await this.prismaClient.paciente.findUnique({ where: { cedula: parseInt(cedula) } })
  
      if (paciente) {
        res.json(paciente)
      } else {
        res.status(404).json({ message: 'Paciente no encontrado' })
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Error al obtener el paciente' })
    }
  }
}

export default PacienteController;