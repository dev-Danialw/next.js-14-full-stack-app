import { Suspense } from "react";

import { auth } from "@/lib/auth";

import AdminPostForm from "@/components/adminPostForm/page";
import AdminPosts from "@/components/adminPosts/page";

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col gap-24 mt-12">
      <div className="flex gap-24">
        <div className="flex-1">
          <Suspense
            fallback={<div className="text-2xl font-light">Loading...</div>}
          >
            <AdminPosts />
          </Suspense>
        </div>
        <div className="flex-1">
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
      <div className="flex gap-24">
        <div className="flex-1">
          <Suspense
            fallback={<div className="text-2xl font-light">Loading...</div>}
          >
            {/* <AdminUsers /> */}
          </Suspense>
        </div>
        <div className="flex-1">{/* <AdminUserForm /> */}</div>
      </div>
    </div>
  );
};

export default AdminPage;
