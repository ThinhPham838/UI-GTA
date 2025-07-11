import type { UseQueryOptions as ReactUseQueryOptions, UseMutateFunction } from 'react-query';
import React from 'react';

export interface UseQueryOptions extends ReactUseQueryOptions {
  variables?: {
    [key: string]: any;
    page?: number;
    size?: number;
    id?: React.Key;
  };
}

export type MutationResult<TData = any, TVariables = any> = [
  boolean,
  UseMutateFunction<TData, Error | undefined, TVariables, unknown>
];

export interface MutationOptions<T = any> extends Omit<ReactUseQueryOptions<T>, 'onSuccess'> {
  onSuccess?: (response: any) => any;
  successText?: string;
  displayMessage?: boolean;
  displayError?: boolean;
}
