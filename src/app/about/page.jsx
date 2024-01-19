import Image from "next/image";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <div className="flex gap-24">
      <div className="flex flex-1 flex-col gap-12">
        <h2 className="text-slate-200">About Us</h2>
        <h1 className="text-5xl">Pioneering Digital Creativity.</h1>
        <p className="text-xl font-light">
          Crafting digital ideas that transcend boundaries, embracing innovation
          with precision. Committed to the philosophy of flexibility, we are a
          global leader in consulting and finance solutions. Offering an
          extensive array of web and software development services with over a
          decade of invaluable experience.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-blue-500 font-medium">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-blue-500 font-medium">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-blue-500 font-medium">10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className="object-fill"
        />
      </div>
    </div>
  );
};

export default AboutPage;
