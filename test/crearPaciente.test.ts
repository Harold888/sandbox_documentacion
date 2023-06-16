import request from 'supertest';
import App from '../src/App';

describe('Crear paciente', () => {
  let app: App;

  beforeAll(() => {
    app = new App();
    app.start();
  });

  afterAll(() => {
    app.close();
  });

  test('Debe crear un nuevo paciente y devolver un mensaje', async () => {
    const paciente = {
      cedula: 1123456,
      nombre: 'Prueba',
      apellido: 'Prueba',
      fecha: '1956/01/01',
      telefono: '+57-3456789',
    };

    const res = await request(app.app).post('/crear_paciente').send(paciente);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'Paciente creado correctamente' });
  });
});
