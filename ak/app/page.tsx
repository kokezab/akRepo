// pages/index.tsx

import { FC } from 'react';
import Head from 'next/head';

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-custom-bg bg-cover bg-center">
      <Head>
        <title>Welcome to AK.d.o</title>
        <meta name="description" content="Welcome to AK.d.o" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center bg-white bg-opacity-80">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">AK.d.o</span>!
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">pages/index.tsx</code>
        </p>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t bg-white bg-opacity-80">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
};

export default Home;
