import { Router, Request, Response } from "express";
import CitaController from "../controllers/CitaController";

class CitaRouter {
  router: Router;
  citaController: CitaController;

  constructor() {
    this.router = Router();
    this.citaController = new CitaController();
    this.routes();
  }

  private routes(): void {
    this.router.get("/medicos", this.citaController.obtenerMedicos);
    this.router.get("/pacientes", this.citaController.obtenerPacientes);
  }
}

export default CitaRouter;
