import { Schema, model } from 'mongoose';
import { AcademicSemesterConstants } from './academicSemester.constant';
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface';

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: AcademicSemesterConstants.Title,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterConstants.Code,
    },
    startMonth: {
      type: String,
      required: true,
      enum: AcademicSemesterConstants.Months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: AcademicSemesterConstants.Months,
    },
  },
  { timestamps: true }
);

const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
);

export default AcademicSemester;
