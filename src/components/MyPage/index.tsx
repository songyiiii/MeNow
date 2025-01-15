import { clearUserInfo } from '@/redux/redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MyPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else {
      setIsLoading(false);
    }
  }, [user, router]);

  const handleLogout = () => {
    dispatch(clearUserInfo());
    router.push('/');
  };

  if (isLoading) {
    return <p>로딩중..</p>;
  }

  return (
    <div>
      <p>{user?.email}님 환영합니다.</p>
      <p onClick={handleLogout}>로그아웃</p>
    </div>
  );
};
export default MyPage;
