import { handleGoogleLogin } from "@/lib/actions";

const LoginPage = async () => {
  return (
    <div className="flex items-center justify-center">
      <form action={handleGoogleLogin}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
