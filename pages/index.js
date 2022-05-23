import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

// Note: Cont is short for Container

// Components
import StyledLogin from './Login';

export default function Home() {
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
