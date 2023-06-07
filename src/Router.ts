import express, {Application, Request, Response} from 'express'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'

class App{
    
    //Atributos 
    
    public app:any
    private server:any

    constructor(){
        this.app=express()
        this.app.use(express.json())
        this.app.use(
            "/api-docs",
            swaggerUi.serve,
            swaggerUi.setup(swaggerSpec)
        )
        this.routes()
    }

    private routes():void{
        this.app.get(
            "/",
            (req:Request, res:Response)=>{
                res.send("Bienvenidos a typescript")
            }
        )
    }

    public start():void{

        this.server=this.app.listen(
            3000,
            ()=>{console.log("El servidor esta escuchando en el puerto 3000")}
        )
    }

    public close():void{
        this.server.close()
    }
}

export default App