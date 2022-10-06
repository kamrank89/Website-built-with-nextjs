function AuthenticatedAdminLoginPage() {
  return (
    <div className="bg-slate-200 w-1/6 rounded m-auto mt-36 h-96">
      <form
        action="/api/database/authenticatedadmin"
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
          type="password"
          placeholder="password"
          name="password"
          className="bg-slate-500 rounded w-4/6 mx-auto text-center"
        />

        <button
          type="submit"
          className="bg-slate-500 w-2/6 mx-auto rounded text-center"
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

export default AuthenticatedAdminLoginPage;
