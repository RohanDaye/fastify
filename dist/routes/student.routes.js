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
exports.default = studentRoutes;
const student_controller_1 = require("../controllers/student.controller");
function studentRoutes(app) {
    return __awaiter(this, void 0, void 0, function* () {
        app.post('/students', student_controller_1.StudentController.createStudent);
        app.get('/students', student_controller_1.StudentController.getAllStudents);
        app.get('/students/:id', student_controller_1.StudentController.getStudentById);
        app.put('/students/:id', student_controller_1.StudentController.updateStudent);
    });
}
