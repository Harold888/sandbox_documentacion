import request from 'supertest';
import App from '../src/App';

describe('Crear médico', () => {
  let app: App;

  beforeAll(() => {
    app = new App();
    app.start();
  });

  afterAll(() => {
    app.close();
  });

  test('Debe crear un nuevo médico', async () => {
    const medico = {
      tarjetaProfesional: 1123456,
      nombre: 'Prueba',
      apellido: 'Prueba',
      correo: 'prueba@prueba.com',
      consultorio: '208',
      Especialidad: 1,
    };

    const res = await request(app.app)
      .post('/crear_medico')
      .send(medico);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'Médico creado correctamente' });
  });
});