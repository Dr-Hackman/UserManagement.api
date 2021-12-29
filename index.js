import express from 'express';
import usersRoutes from'./routes/usersRoute.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.use('/api/v1', usersRoutes);

app.listen(5000, () => console.log('Server started on PORT 5000'));



