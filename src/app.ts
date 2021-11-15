import express, { Application } from 'express'


export default function App(port: number) {

    const app: Application = express()

    app.set('port', port || 3001)
    app.listen(app.get('port'), () => {
        console.log(`Server is running on port ${app.get('port')}`)
    })

}