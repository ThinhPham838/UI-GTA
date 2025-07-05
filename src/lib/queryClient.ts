import request, { format, toQueryString } from '@apis/request';
// import { GetHeader } from '@apis/BaseApi';
import { QueryClient, QueryFunctionContext } from 'react-query';

type Options = [string, { [key: string]: any }];

// Define a default query function that will receive the query key
async function defaultQueryFn({ queryKey }: QueryFunctionContext<Options>) {
  let _queryKey: any = queryKey;

  if (typeof _queryKey === 'string') {
    _queryKey = [_queryKey];
  }
  const [url, { page = 1, size = 40, ..._params } = {}] = _queryKey;
  const { fullUrl, params } = format(url, { page, size, ..._params });
  const promise = request(`${fullUrl}?${toQueryString(params)}`, {
    headers: {
      // GetHeader
    }
  });

  return promise;
}

const onError = ({ error }: { error: any }) => {
  //   const { message: msg, status } = error
  // do something with error message
};

export let queryClient: QueryClient;

export default function createQueryClient() {
  if (!queryClient) {
    queryClient = new QueryClient({
      defaultOptions: {
        mutations: {
          onError: (error: any) => onError({ error })
        },
        queries: {
          onError: (error: any) => onError({ error }),
          queryFn: defaultQueryFn as any,
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          refetchInterval: false,
          retry: false
        }
      }
    });
  }

  return queryClient;
}
