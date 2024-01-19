import Image from "next/image";

const Home = () => {
  return (
    <div className="flex gap-24">
      <div className="flex flex-1 flex-col gap-12">
        <h1 className="text-8xl font-medium">Enchanting Insights Hub.</h1>
        <p className="text-xl text-left">
          Discover the allure of captivating ideas and explore the art of
          expression. Immerse yourself in the world of creativity and
          imagination.
        </p>
        <div className="flex gap-5">
          <button className="p-4 min-w-32 border-0 rounded bg-blue-500 text-white font-semibold">
            Learn More
          </button>
          <button className="p-4 min-w-32 border-0 rounded bg-white text-blue-600 font-semibold">
            Contact
          </button>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image src="/heroGif.gif" alt="" fill />
      </div>
    </div>
  );
};

export default Home;
