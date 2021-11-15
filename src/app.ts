import express, { Application } from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { connect } from 'mongoose'
dotenv.config()

async function Conexion(): Promise<void> {
    try {
        const url: string | undefined = process.env.DB_URL

        await connect(`${url}`)
        console.log('Conexion a la base de datos establecida')
    } 
    catch (error) {
        console.log(error)
    }
}




export default function App(port: number) {


    const app: Application = express()

    Conexion()
    app.set('port', port || 3001)

    app.use(morgan('dev'))
    app.listen(app.get('port'), () => {
        console.log(`Server is running on port ${app.get('port')}`)
    })

}