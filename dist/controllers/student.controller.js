"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const student_repository_1 = require("../core/repositories/student.repository");
exports.StudentController = {
    createStudent: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const student = yield student_repository_1.StudentRepository.create(request.body);
        return reply.code(201).send(student);
    }),
    getAllStudents: (_, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const students = yield student_repository_1.StudentRepository.findAll();
        return reply.send(students);
    }),
    getStudentById: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = request.params;
        const student = yield student_repository_1.StudentRepository.findById(Number(id));
        return student ? reply.send(student) : reply.code(404).send({ message: 'Student not found' });
    }),
    updateStudent: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = request.params;
        const student = yield student_repository_1.StudentRepository.update(Number(id), request.body);
        return student ? reply.send(student) : reply.code(404).send({ message: 'Student not found' });
    }),
};
