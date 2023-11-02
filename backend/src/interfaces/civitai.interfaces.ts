type CivitaiImageSort = 'Most Reactions' | 'Most Comments' | 'Newest';
type CivitaiImagePeriod = 'AllTime' | 'Year' | 'Month' | 'Week' | 'Day';

export interface CivitaiInput {
  modelId?: string;
  limit?: number;
  nsfw?: boolean;
  sort?: CivitaiImageSort;
  period?: CivitaiImagePeriod;
}

export type CivitaiImage = {
  link: string;
  nsfw: boolean;
  model: string;
  steps: number;
  sampler: string;
  cfgScale: number;
};

export interface CivitaiOutput {
  images: CivitaiImage[];
}
