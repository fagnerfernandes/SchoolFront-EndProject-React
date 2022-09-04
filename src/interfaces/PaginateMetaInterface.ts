export interface PaginateMetaInterface {
  currentPage: number;
  perPage: number;
  total: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
}

export default PaginateMetaInterface;
