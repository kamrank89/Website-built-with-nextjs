import Link from "next/link";

const AdminLogin = (props) => {
  return (
    <div className="bg-slate-200 w-1/6 rounded h-96">
      <div>
        <form
          action={props.api}
          method="post"
          className="flex flex-col space-y-4 "
        >
          <input
            type="text"
            placeholder="username"
            name="username"
            className="bg-slate-500 w-4/6 mx-auto rounded  mt-24 text-center"
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            className="bg-slate-500 rounded w-4/6 mx-auto text-center"
          />
          <button
            type="submit"
            className="bg-slate-500 w-2/6 mx-auto rounded text-center"
          >
            Sign In!
          </button>
          <Link href="/authenticatedadminloginpage">
            <button
              type="submit"
              className="bg-slate-500 w-2/6 mx-auto rounded text-center"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
