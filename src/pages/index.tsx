import type { NextPage } from 'next'
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import SigninBtn from '../components/SigninBtn';
import SignoutBtn from '../components/SignoutBtn';
import useCurrentUser from '../hooks/useCurrentUser';

const Home: NextPage = () => {
  const user = useCurrentUser();
  return (
    <>
      <h1>Next.js App with OIDC Signin</h1>
      <UnauthenticatedTemplate>
        <SigninBtn />
      </UnauthenticatedTemplate>

      <AuthenticatedTemplate>
        <p>
          こんにちは、{user?.name} さん
        </p>
        <p>メールアドレス：{user?.email}</p>
        <SignoutBtn />
      </AuthenticatedTemplate>

    </>
  );
};

export default Home
