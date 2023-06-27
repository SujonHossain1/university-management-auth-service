import ApiError from '../../../errors/ApiError';
import { IAcademicSemester } from './academicSemester.interface';
import AcademicSemester from './academicSemester.model';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  const result = await AcademicSemester.create(payload);

  if (!result) {
    throw new ApiError(400, 'AcademicSemester cannot be created');
  }

  return result;
};

export const AcademicSemesterService = {
  createSemester,
};
