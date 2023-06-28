import httpStatus from 'http-status';
import { Schema, model } from 'mongoose';
import ApiError from '../../../errors/ApiError';
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

// Handle duplicate semester on same year && same semester
academicSemesterSchema.pre('save', async function (next) {
  const semester = this as IAcademicSemester;
  const { title, year } = semester;

  const isExit = await AcademicSemester.findOne({ title, year });

  if (isExit) {
    throw new ApiError(httpStatus.CONFLICT, 'Academic Semester already exist!');
  }
  next();
});

const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
);

export default AcademicSemester;
