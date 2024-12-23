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
exports.StudentRepository = void 0;
const student_model_1 = require("../models/student.model");
exports.StudentRepository = {
    create: (data) => __awaiter(void 0, void 0, void 0, function* () { return yield student_model_1.StudentModel.create(data); }),
    findAll: () => __awaiter(void 0, void 0, void 0, function* () { return yield student_model_1.StudentModel.findAll(); }),
    findById: (id) => __awaiter(void 0, void 0, void 0, function* () { return yield student_model_1.StudentModel.findByPk(id); }),
    update: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        const student = yield student_model_1.StudentModel.findByPk(id);
        if (student) {
            return student.update(data);
        }
        return null;
    }),
};
