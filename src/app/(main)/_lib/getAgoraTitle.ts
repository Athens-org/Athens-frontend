/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import fetchWrapper from '@/lib/fetchWrapper';
import { getToken } from '@/lib/getToken';
import showToast from '@/utils/showToast';
import tokenManager from '@/utils/tokenManager';
import { QueryFunction } from '@tanstack/react-query';

// eslint-disable-next-line import/prefer-default-export
export const getAgoraTitle:QueryFunction<
{ title: string, status: string }, [_1: string, _2: string]> = async ({ queryKey }) => {
  const [agoraId, _] = queryKey;

  // 토큰을 가지고 있는지 확인
  if (tokenManager.getToken() === undefined) {
    await getToken();
  }

  const res = await fetchWrapper.call('/api/v1/auth/title', {
    next: {
      tags: [`${agoraId}`, 'agoraTitle'],
    },
    credentials: 'include',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenManager.getToken()}`,
    },
  });

  if (res.success === false) {
    if (res.error.code === 1301) {
      showToast('존재하지 않는 아고라입니다.', 'error');
    }
  }

  const result = res.response;

  return result;
};