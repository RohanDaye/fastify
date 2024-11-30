import { StudentModel } from '../models/student.model';

export const StudentRepository = {
  create: async (data: any) => await StudentModel.create(data),


  findAll: async () => await StudentModel.findAll(),


  findById: async (id: number) => await StudentModel.findByPk(id),


  update: async (id: number, data: any) => {
    const student = await StudentModel.findByPk(id);
    if (student) {
      return student.update(data);
    }
    return null;
  },






};
