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

const SemesterCodeMapper: {
  [key in IAcademicSemesterTitle]: IAcademicSemesterCode;
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};

export const AcademicSemesterConstants = {
  Months,
  Code,
  Title,
  SemesterCodeMapper,
};
