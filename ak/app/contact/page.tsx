import { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Contact - AK Architects</title>
        <meta name="description" content="Contact AK Architects" />
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
                <a href="/" className="text-gray-900 hover:text-gray-700">Home</a>
                <a href="/about" className="text-gray-900 hover:text-gray-700">About</a>
                <a href="/projects" className="text-gray-900 hover:text-gray-700">Projects</a>
                <a href="/contact" className="text-gray-900 hover:text-gray-700">Contact</a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
        <form className="mt-8 space-y-6 max-w-md w-full">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows={4} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Message"></textarea>
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send Message
            </button>
          </div>
        </form>
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

export default Contact;
