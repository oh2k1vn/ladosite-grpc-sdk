/**
 * Supported criteria filter types/comparison operators
 */
export type CriteriaType =
  | 'equal'
  | 'notequal'
  | 'gt'
  | 'lt'
  | 'includes'
  | 'startswith'
  | 'endswith'
  | 'dateRange';

/**
 * Filter criteria item representation
 */
export interface Criteria {
  field: string;
  value: string;
  type: CriteriaType;
}

/**
 * Sorting representation
 */
export interface Sort {
  field: string;
  order: 'asc' | 'desc' | 'ascending' | 'descending';
}

/**
 * Common query parameters for search list APIs
 */
export interface Query {
  pageNumber?: number;
  pageSize?: number;
  criteria?: Criteria[];
  sort?: Sort;
  operator?: 'and' | 'or' | string;
}
