import type { FilterMemberDTO } from './filter-member.dto';

export interface FilterDTO {
	title: string;
	members: FilterMemberDTO[];
}
