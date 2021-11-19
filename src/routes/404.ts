import express, { Application, Request, Response }from 'express';

const app: Application = express()

app.get('/*' , (req: Request, res: Response) => {
  res.status(404).json({ message: 'Not Found' });
})

export default app;