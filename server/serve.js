import express from 'express';
import route from './router/route';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../swagger.json';

const app = express();
app.use(express.json());
app.use('/freeMentor', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
const port = process.env.PORT || 3000;
app.use(route);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`server is running on port: ${port}`));

export default app;
