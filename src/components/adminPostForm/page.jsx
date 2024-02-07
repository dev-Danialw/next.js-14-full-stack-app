"use client";

import { addBlog } from "@/lib/actions";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addBlog, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <h1 className="text-xl font-bold text-green-400">Add New Blog</h1>
      <input
        className="p-5 border-none rounded-md font-bold text-slate-800 bg-slate-100 text-xl"
        type="hidden"
        name="userId"
        value={userId}
      />
      <input
        className="p-5 border-none ounded-md font-bold text-slate-800 bg-slate-100 text-xl"
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        className="p-5 border-none ounded-md font-bold text-slate-800 bg-slate-100 text-xl"
        type="text"
        name="slug"
        placeholder="Slug"
      />
      <input
        className="p-5 border-none ounded-md font-bold text-slate-800 bg-slate-100 text-xl"
        type="text"
        name="img"
        placeholder="Img"
      />
      <textarea
        className="p-5 border-none ounded-md font-bold text-slate-800 bg-slate-100 text-xl"
        type="text"
        name="desc"
        placeholder="Desc"
        rows={10}
      />
      <button className="p-5 cursor-pointer border-none rounded-md font-bold text-slate-800 bg-slate-100 text-xl">
        Add
      </button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
