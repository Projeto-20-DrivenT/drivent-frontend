import useAsync from '../useAsync';

import * as activitiesApi from '../../services/activitiesApi.js';
import useToken from '../useToken.js';

export default function useActivityes() {
  const token = useToken();

  const {
    data: activities,
    loading: ActivityesInLoading,
    error: ActivityesError,
    act: getActivityes
  } = useAsync(() => activitiesApi.getActivityes(token));

  return {
    activities,
    ActivityesInLoading,
    ActivityesError,
    getActivityes
  };
}
