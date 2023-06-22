import { Schema, model } from 'mongoose';
import { IAcademicFaculty } from './academicFaculty.interface';

const userSchema = new Schema<IAcademicFaculty>({
  title: { type: String, required: true },
});

export const AcademicFaculty = model<IAcademicFaculty>(
  'AcademicFaculty',
  userSchema
);
