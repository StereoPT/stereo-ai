type CivitaiImageSort = 'Most Reactions' | 'Most Comments' | 'Newest';
type CivitaiImagePeriod = 'AllTime' | 'Year' | 'Month' | 'Week' | 'Day';

export interface CivitaiInput {
  modelId?: string;
  limit?: number;
  nsfw?: boolean;
  sort?: CivitaiImageSort;
  period?: CivitaiImagePeriod;
}
