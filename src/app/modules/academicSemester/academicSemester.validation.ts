import { z } from 'zod';
import { AcademicSemesterConstants } from './academicSemester.constant';

const createAcademicSemesterZodSchema = z.object({
  title: z.enum([...AcademicSemesterConstants.Title] as [string, ...string[]], {
    required_error: 'Title is required',
  }),
  year: z.number({
    required_error: 'Year is required',
  }),
  code: z.enum([...AcademicSemesterConstants.Code] as [string, ...string[]], {
    required_error: 'Code is required',
  }),

  startMonth: z.enum(
    [...AcademicSemesterConstants.Months] as [string, ...string[]],
    {
      required_error: 'Start month is required',
    }
  ),
  endMonth: z.enum(
    [...AcademicSemesterConstants.Months] as [string, ...string[]],
    {
      required_error: 'End month is required',
    }
  ),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};
