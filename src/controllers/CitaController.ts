import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";

class CitaController {
    private prismaCliente: PrismaClient;

    constructor() {
        this.prismaCliente = new PrismaClient();
    }

    async obtenerMedicos(req: Request, res: Response) {
        try {
            const medicos = await this.prismaCliente.medico.findMany(); // Obtener todos los médicos de la base de datos

            res.json({ medicos });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener médicos' });
        }
    }

    async obtenerPacientes(req: Request, res: Response) {
        try {
            const pacientes = await this.prismaCliente.paciente.findMany(); // Obtener todos los pacientes de la base de datos

            res.json({ pacientes });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al obtener pacientes' });
        }
    }
}

export default CitaController;
