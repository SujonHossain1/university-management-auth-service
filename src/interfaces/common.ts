import { IGenericErrorMessage } from './error';

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
export type IGenericResponse<T> = {
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
};
export type IApiResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  data?: T | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
};

export type IPaginationOptions = Partial<{
  page: number;
  limit: number;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}>;
