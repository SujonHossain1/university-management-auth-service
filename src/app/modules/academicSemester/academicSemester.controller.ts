import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterService } from './academicSemester.service';

const createSemester: RequestHandler = catchAsync(async (req, res, next) => {
  const { ...academicSemesterData } = req.body;
  const result = await AcademicSemesterService.createSemester(
    academicSemesterData
  );

  sendResponse(res, {
    statusCode: 201,
    success: true,
    data: result,
    message: 'Academic Semester created Successfully',
  });

  next();
});

const getAllSemester: RequestHandler = catchAsync(async (req, res, next) => {
  const paginationOptions = pick(req.query, paginationFields);
  const result = await AcademicSemesterService.getAllSemester(
    paginationOptions
  );

  sendResponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result.data,
    meta: result.meta,
    message: 'Academic Semester fetched Successfully',
  });

  next();
});

export const AcademicSemesterController = {
  createSemester,
  getAllSemester,
};
