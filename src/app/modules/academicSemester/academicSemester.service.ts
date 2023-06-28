import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
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

export const AcademicSemesterService = {
  createSemester,
};
