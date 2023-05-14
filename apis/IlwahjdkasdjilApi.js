import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const imagePOSTStatusAndText = Constants =>
  fetch(`https://dev4569.npkn.net/image`, {
    body: JSON.stringify({
      name: 'value',
      width: 15,
      length: 15,
      image:
        'https://cdn.weweb.io/designs/caaa120f-80a7-4012-89bf-5049ccfa6b8b/sections/gardenexample.jpg?_wwcv=1684027896219',
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'napkin-account-api-key': '1b65e6272604477eb2344ae40d9cd324',
    },
    method: 'POST',
  }).then(async res => ({
    status: res.status,
    statusText: res.statusText,
    text: await res.text(),
  }));

export const imagePOST = Constants =>
  imagePOSTStatusAndText(Constants).then(({ status, statusText, text }) => {
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error(
        [
          'Failed to parse response text as JSON.',
          `Error: ${e.message}`,
          `Text: ${JSON.stringify(text)}`,
        ].join('\n\n')
      );
    }
  });

export const useImagePOST = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://dev4569.npkn.net/image`, {
    body: JSON.stringify({
      name: 'value',
      width: 15,
      length: 15,
      image:
        'https://cdn.weweb.io/designs/caaa120f-80a7-4012-89bf-5049ccfa6b8b/sections/gardenexample.jpg?_wwcv=1684027896219',
    }),
    depends: [isFocused],
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'napkin-account-api-key': '1b65e6272604477eb2344ae40d9cd324',
    },
    method: 'POST',
  });
};

export const FetchImagePOST = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://dev4569.npkn.net/image`, {
    body: JSON.stringify({
      name: 'value',
      width: 15,
      length: 15,
      image:
        'https://cdn.weweb.io/designs/caaa120f-80a7-4012-89bf-5049ccfa6b8b/sections/gardenexample.jpg?_wwcv=1684027896219',
    }),
    depends: [isFocused],
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'napkin-account-api-key': '1b65e6272604477eb2344ae40d9cd324',
    },
    method: 'POST',
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchImage: refetch });
};
