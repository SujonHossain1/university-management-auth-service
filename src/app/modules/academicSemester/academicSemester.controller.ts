import { RequestHandler } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './academicSemester.service';

const createSemester: RequestHandler = catchAsync(async (req, res, next) => {
  const { ...academicSemesterData } = req.body;
  const result = await AcademicSemesterService.createSemester(
    academicSemesterData
  );
  next();

  sendResponse(res, {
    statusCode: 201,
    success: true,
    data: result,
    message: 'Academic Semester created Successfully',
  });
});

export const AcademicSemesterController = {
  createSemester,
};
