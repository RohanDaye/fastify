import Fastify from 'fastify';
import studentRoutes from './routes/student.routes';
import sequelize from './utils/db';

const app = Fastify();

app.register(studentRoutes);

const startServer = async () => {
  try {
    await sequelize.sync({ force: false });
    await app.listen({ port: 3000 });
    console.log('Server running at http://localhost:3000');
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

startServer();
