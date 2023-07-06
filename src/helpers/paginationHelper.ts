type IOptions = Partial<{
  page: number;
  limit: number;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}>;

type IOptionsWithSkip = {
  skip: number;
  page: number;
  limit: number;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
};

const calculatePagination = (options: IOptions): IOptionsWithSkip => {
  const page = Number(options?.page) || 1;
  const limit = Number(options?.limit) || 10;
  const skip = (page - 1) * limit;

  const sortBy = options?.sortBy || 'createdAt';
  const sortOrder = options?.sortOrder || 'desc';

  return { page, limit, skip, sortBy, sortOrder };
};

export const PaginationHelper = {
  calculatePagination,
};
