import { UseQueryOptions } from '@lib/types';
import { useQuery as useReactQuery } from 'react-query';

export default function useQuery<TData = unknown, TError = unknown>(key: string, options: UseQueryOptions = {}) {
  const { variables, ...others } = options;
  const { data, ...rest } = useReactQuery<TData, TError>([key, variables], {
    suspense: false,
    cacheTime: 1000,
    keepPreviousData: true,
    ...(others as any)
  });

  return {
    ...rest,
    data
  };
}
