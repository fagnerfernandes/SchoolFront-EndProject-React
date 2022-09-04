export interface PagedMetaInterface {
  currentPage: number;
  perPage: number;
  total: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  nextPage: string;
  prevPage: string;
}

export const createPagedMeta = (data: any = {}): PagedMetaInterface => {
  return {
    currentPage: Number(data.currentPage || 1),
    perPage: Number(data.perPage || 10),
    total: Number(data.total || 0),
    totalPages: Number(data.totalPages || 1),
    hasPrevPage: data.hasPrevPage || false,
    hasNextPage: data.hasNextPage || false,
    nextPage: data.nextPage || '',
    prevPage: data.prevPage || '',
  };
};

export default { createPagedMeta };
