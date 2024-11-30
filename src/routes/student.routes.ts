import { FastifyInstance } from 'fastify';
import { StudentController } from '../controllers/student.controller';

export default async function studentRoutes(app: FastifyInstance) {
  app.post('/students', StudentController.createStudent);
  app.get('/students', StudentController.getAllStudents);
  app.get('/students/:id', StudentController.getStudentById);
  app.put('/students/:id', StudentController.updateStudent);
}
