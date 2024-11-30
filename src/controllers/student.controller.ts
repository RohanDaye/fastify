import { FastifyRequest, FastifyReply } from 'fastify';
import { StudentRepository } from '../core/repositories/student.repository';

export const StudentController = {
  createStudent: async (request: FastifyRequest, reply: FastifyReply) => {
    const student = await StudentRepository.create(request.body);
    return reply.code(201).send(student);
  },

  getAllStudents: async (_: FastifyRequest, reply: FastifyReply) => {
    const students = await StudentRepository.findAll();
    return reply.send(students);
  },

  getStudentById: async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as any;
    const student = await StudentRepository.findById(Number(id));
    return student ? reply.send(student) : reply.code(404).send({ message: 'Student not found' });
  },

  updateStudent: async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as any;
    const student = await StudentRepository.update(Number(id), request.body);
    return student ? reply.send(student) : reply.code(404).send({ message: 'Student not found' });
  },


  
  

};
