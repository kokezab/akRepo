import Head from 'next/head';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>About - AK Architects</title>
        <meta name="description" content="About AK Architects" />
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
        <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Meet the team behind AK Architects. We are dedicated to designing spaces that inspire and elevate the human experience.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white p-4 shadow rounded-lg">
            <img src="/team-member-1.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full object-cover mb-4" />
            <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
            <p className="text-gray-700">Lead Architect</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 shadow rounded-lg">
            <img src="/team-member-2.jpg" alt="Team Member 2" className="w-32 h-32 rounded-full object-cover mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Jane Smith</h3>
            <p className="text-gray-700">Project Manager</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 shadow rounded-lg">
            <img src="/team-member-3.jpg" alt="Team Member 3" className="w-32 h-32 rounded-full object-cover mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Alice Johnson</h3>
            <p className="text-gray-700">Interior Designer</p>
          </div>
        </div>
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

export default About;
