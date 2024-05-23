import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-custom-bg bg-gray-100 bg-blend-darken">
      <Head>
        <title>AK Architects</title>
        <meta name="description" content="Welcome to AK Architects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">AK Architects</h1>
              </div>
            </div>
            <div className="flex">
              <div className="ml-6 flex items-center space-x-4">
                <a href="#" className="text-gray-900 hover:text-gray-700">Home</a>
                <a href="about" className="text-gray-900 hover:text-gray-700">About</a>
                {/*<a href="#" className="text-gray-900 hover:text-gray-700">Projects</a>*/}
                <a href="contact" className="text-gray-900 hover:text-gray-700">Contact</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900">Welcome to AK Architects</h2>
        <p className="mt-4 text-lg text-gray-700 text-center">
          We design spaces that inspire and elevate the human experience.
        </p>
      </main>

      <footer className="w-full bg-white shadow-inner mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; 2024 AK Architects. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
