import { PagedMetaInterface } from './PagedMeta';

export interface OptionsPagedInterface {
  page: number;
  itemsPerPage: number;
  sortBy: string[];
  sortDesc: boolean[];
  groupBy?: string[];
  groupDesc?: boolean[];
  mustSort: boolean;
  multiSort: boolean;
}

export const createOptionsPage = (pagedMeta?: PagedMetaInterface, defaultOption: any = {}): OptionsPagedInterface => {
  return {
    page: pagedMeta?.currentPage || 1,
    itemsPerPage: pagedMeta?.perPage || 10,
    sortBy: defaultOption.sortBy || [],
    sortDesc: defaultOption.sortDesc || [],
    groupBy: defaultOption.groupBy || [],
    groupDesc: defaultOption.groupDesc || [],
    mustSort: true,
    multiSort: false,
  };
};

export default { createOptionsPage };
