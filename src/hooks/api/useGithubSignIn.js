import useAsync from '../useAsync';

import * as authApi from '../../services/authApi';

export default function useGithubSignIn() {
  const {
    loading: githubInLoading,
    error: githubInError,
    act: githubSignIn
  } = useAsync(authApi.githubSign, false);

  return {
    githubInLoading,
    githubInError,
    githubSignIn
  };
}
