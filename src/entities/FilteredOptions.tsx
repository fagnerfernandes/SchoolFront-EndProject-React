import { OptionsPagedInterface, createOptionsPage } from './OptionsPaged';

export interface FilterInterface {
  field: string;
  operation?: string;
  value: any;
}

export interface FilteredOptionsInterface {
  filters: FilterInterface[];
  options: OptionsPagedInterface;
}

export const makeQueryParamsForRequest = (filteredOptions?: FilteredOptionsInterface) => {
  const op = filteredOptions?.options || createOptionsPage();

  const params: any = {
    page: op.page,
    limit: op.itemsPerPage,
  };

  params.orderBy = op?.sortBy?.[0] || 'createdAt';
  params.orderByDirection = op?.sortBy?.[0] ? 'ASC' : 'DESC';

  if (filteredOptions?.filters && filteredOptions?.filters.length > 0) {
    params.filters = filteredOptions.filters.map((f) => JSON.stringify(f));
  }

  return params;
};

export default FilteredOptionsInterface;
