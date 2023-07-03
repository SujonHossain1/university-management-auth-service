import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import {
  IGenericResponse,
  IPaginationOptions,
} from '../../../interfaces/common';
import { AcademicSemesterConstants } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import AcademicSemester from './academicSemester.model';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (
    AcademicSemesterConstants.SemesterCodeMapper[payload.title] !== payload.code
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Semester code is not valid');
  }

  const result = await AcademicSemester.create(payload);

  if (!result) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'AcademicSemester cannot be created'
    );
  }

  return result;
};

const getAllSemester = async (
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const { page = 1, limit = 10 } = paginationOptions;
  const skip = (Number(page) - 1) * Number(limit);

  const result = await AcademicSemester.find({}, {})
    .skip(skip)
    .limit(Number(limit));
  const total = await AcademicSemester.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
export const AcademicSemesterService = {
  createSemester,
  getAllSemester,
};
