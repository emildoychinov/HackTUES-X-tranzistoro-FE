import type { FILTER_TYPES } from '../enums/filter-types.enum';
import type { FilterMemberDTO } from './filter-member.dto';

export interface FilterDTO {
	title: string;
	type: FILTER_TYPES;
	isSingle?: boolean;
}
