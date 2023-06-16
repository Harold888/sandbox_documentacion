import request from 'supertest'
import App from '../src/App'
import { before } from 'node:test'

describe('GET /pacientes', ()=>{
    let app: App

    beforeAll(()=>{
        app = new App()
        app.start()
    })

    afterAll(()=>{
        app.close();
    })

    test('Debe devolver un Json con los pacientes', async ()=>{
        const res = await request(app.app).get('/pacientes')
        expect(res.statusCode).toEqual(200)
        expect(res.body[0].nombre).toEqual('Pepita')
    })
})