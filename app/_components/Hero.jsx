import React from 'react'

function Hero() {
  return (
  <div className="relative" id="home">
        <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div>
            <div className="relative pt-36 ml-auto">
                <div className="lg:w-2/3 text-center mx-auto">
                    <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">SyncNest is where <span className="text-primary dark:text-white">work happens, in sync.</span></h1>
                    <p className="mt-8 text-gray-700 dark:text-gray-300"> SyncNest is your team’s digital playground — where ideas flow, projects grow, and everything stays in sync. Build flexible pages, drop in reusable components, and watch your workspace evolve across all your favorite apps. It’s smooth, smart, and built for the way you actually work.</p>
                    <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                        <a
                          href="/dashboard"
                          className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                        >
                          <span className="relative text-base font-semibold text-white"
                            >Get started</span
                          >
                        </a>
                        <a
                          href="https://www.linkedin.com/in/sanjeev-yadav-7349861a3/"
                          className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                        >
                          <span
                            className="relative text-base font-semibold text-primary dark:text-white"
                            >The Creator of Syncnest</span
                          >
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero