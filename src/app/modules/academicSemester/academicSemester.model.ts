import { Schema, model } from 'mongoose';
import {
  academicSemesterCodes,
  academicSemesterMonth,
  academicSemesterTitles,
} from './academicSemester.constant';
import {
  AcademicSemesterModal,
  IAcademicSemester,
} from './academicSemester.interface';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitles,
    },
    year: { type: Number, required: true },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCodes,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModal>(
  'AcademicSemester',
  academicSemesterSchema
);
