import { getUserInfo } from '@/pages/api/userApi';
import { InferGetServerSidePropsType } from 'next';

export const getServerSideProps = async () => {
console.log('getserversideprops 실행')
  const userInfo = await getUserInfo();
  return {
    props: {
      userInfo,
    },
  };
};

const ProfileEdit = ({
  userInfo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(userInfo);
  return <div>edit</div>;
};
export default ProfileEdit;
