// "use client";
import Image from "next/image";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  return (
    <div className="flex items-center gap-24">
      <div className=" flex-1 h-[500px] relative">
        <Image src="/contact.png" alt="" fill className="object-fill" />
      </div>
      <div className="flex-1">
        <form action="" className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name"
            className="p-5 rounded border-none outline-none text-white bg-blue-900"
          />
          <input
            type="text"
            placeholder="Email"
            className="p-5 rounded border-none outline-none text-white bg-blue-900"
          />
          <input
            type="number"
            placeholder="Phone"
            className="p-5 rounded border-none outline-none text-white bg-blue-900"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="p-5 rounded border-none outline-none text-white bg-blue-900"
          ></textarea>
          <button className="p-5 font-bold rounded border-none bg-slate-800 hover:scale-105">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
