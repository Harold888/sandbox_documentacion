import {Request, Response} from 'express'
import { PrismaClient } from "@prisma/client"

class MedicoController {

    private prismaCliente: PrismaClient

    constructor(){
        this.prismaCliente = new PrismaClient()
    }

    async obtenerMedicos(req:Request, res:Response){
        const medicos = await this.prismaCliente.medico.findMany()
        res.json(medicos)
    }

}

export default MedicoController