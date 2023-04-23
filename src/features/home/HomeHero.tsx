import { Search } from 'lucide-react';

export default function HomeHero() {
  return (
    <div className="container">
      <div className="relative overflow-hidden rounded-3xl">
        <div className="relative z-10 grid place-items-center bg-black/30 px-4 py-24">
          <div className="w-full max-w-md text-center">
            <h1 className="text-5xl font-semibold text-white drop-shadow">
              Find your new home
            </h1>
            <p className="mt-4 text-lg text-white drop-shadow">
              Let's find a home that's perfect for you and your family
            </p>
            <form className="relative mt-6">
              <input
                className="h-12 w-full rounded-full pl-4 pr-12 text-lg shadow-lg transition-all duration-200 focus:outline-none"
                placeholder="Address, City, District..."
              />
              <div className="absolute right-0 top-0 grid h-full place-items-center pr-1">
                <button className="bg-primary-500 hover:bg-primary-400 focus:bg-primary-600 grid h-10 w-10 place-items-center rounded-full text-white transition-colors duration-200">
                  <Search size={24} />
                </button>
              </div>
            </form>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
