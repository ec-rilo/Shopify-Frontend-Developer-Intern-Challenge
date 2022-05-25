import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import styled from 'styled-components';

// Assets
import server from './api/server';

// Firebase
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

// Components
import StyledLogin from './Login';
import StyledDashboard from './Dashboard';

export default function Home() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const userData = {
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
      }
      server.addUser(userData);
      router.push('/Dashboard');
    }
  }, [user, router]);

  return (
    <div>
      <Head>
        <title>Fun with GPT-3</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <StyledLogin />
    </div>
  )
}
