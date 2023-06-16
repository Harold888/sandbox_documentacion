
export default {
    /**
     * @swagger
     *
     * /medicos:
     *   get:
     *     summary: Obtener un Json de prueba
     *     responses:
     *       200:
     *         description: Has obtenido un json de prueba
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 mensaje:
     *                   type: string
     *             example:
     *               mensaje: "Bienvenido a la ruta de medicos"
     */
     /**
     * @swagger
     *
     * /crear_medico:
     *   post:
     *     summary: Crear un nuevo medico
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               tarjetaProfesional:
     *                 type: integer
     *                 description: Tarjeta profesional
     *               nombre:
     *                 type: string
     *                 description: Nombre del médico
     *               apellido:
     *                 type: string
     *                 description: Apellido del médico
     *               correo:
     *                 type: string
     *                 description: Correo del médico
     *               consultorio:
     *                 type: string
     *                 description: Consultorio del médico
     *               Especialidad:
     *                  type: int
     *                  description: Foreign key de la especialidad del médico
     *             example:
     *               tarjetaProfesional: 1123456
     *               nombre: "Prueba"
     *               apellido: "Prueba"
     *               correo: "prueba@prueba.com"
     *               consultorio: "208"
     *               Especialidad: 1
     *     responses:
     *       200:
     *         description: El Medico ha sido creado exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 mensaje:
     *                   type: string
     *                   description: Mensaje de confirmación
     *             example:
     *               mensaje: "Médico creado correctamente"
     *       400:
     *         description: Error al crear el médico
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 mensaje:
     *                   type: string
     *                   description: Mensaje de error
     *             example:
     *               mensaje: "Error al crear el médico"
     */
  };