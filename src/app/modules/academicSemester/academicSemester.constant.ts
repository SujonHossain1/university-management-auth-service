import {
  IAcademicSemesterCode,
  IAcademicSemesterMonth,
  IAcademicSemesterTitle,
} from './academicSemester.interface';

const Months: IAcademicSemesterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Code: IAcademicSemesterCode[] = ['01', '02', '03'];
const Title: IAcademicSemesterTitle[] = ['Autumn', 'Summer', 'Fall'];

export const AcademicSemesterConstants = {
  Months,
  Code,
  Title,
};
