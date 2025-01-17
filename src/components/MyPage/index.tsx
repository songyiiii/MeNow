import { clearUserInfo } from '@/redux/redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './MyPage.module.css';
import { FaUserAlt } from 'react-icons/fa';
import { IoIosSettings } from 'react-icons/io';
import Link from 'next/link';

const MyPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
  }, [user, router, dispatch]);

  const handleLogout = () => {
    dispatch(clearUserInfo());
    router.push('/');
  };

  return (
    <div className={style.my_page}>
      <div className={style.my_page_top}>
        <div className={style.my_img}>
          <FaUserAlt
            style={{ width: '50px', height: '50px', color: 'white' }}
          />
        </div>
        <div className={style.my_info}>
          <p>{user?.nickname}</p>
        </div>
        <Link href={'/mypage/edit'} className={style.my_setting}>
          <IoIosSettings />
          setting
        </Link>
      </div>
      <div className={style.my_page_middle}>
        <div>posts</div>
        <div>followers</div>
        <div>following</div>
      </div>
      <p onClick={handleLogout}>로그아웃</p>
    </div>
  );
};
export default MyPage;
