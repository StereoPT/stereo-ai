import { getModels } from '@/services/modelService';
import { useQuery } from '@tanstack/react-query';

const useModels = () => {
  return useQuery({ queryKey: ['models'], queryFn: getModels });
};

export default useModels;
