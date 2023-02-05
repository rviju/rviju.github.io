import Head from 'next/head';
import { useEffect } from 'react';

const Redirect = ({ redirect_to }: { redirect_to: string }) => {
  useEffect(() => window.location.replace(redirect_to), []);
  return (
    <div>
      <Head>
        <link rel="canonical" href={redirect_to} />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta httpEquiv="refresh" content={`0;url=${redirect_to}`} />
      </Head>
      <h1>Redirecting...</h1>
      <a href={redirect_to}>Click here if you are not redirected.</a>
    </div>
  );
};

export default Redirect;
