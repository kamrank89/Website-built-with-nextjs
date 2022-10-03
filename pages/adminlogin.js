export default function AdminLogin() {
  const createAdminData = async (e) => {
    const usernameInfo = e.target.username.value;
    const passwordInfo = e.target.password.value;
    const res = await fetch("api/database/addadmindata", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: usernameInfo,
        password: passwordInfo,
      }),
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <div>
      <div className="bg-slate-200 w-1/6 rounded m-auto mt-48 h-96">
        <form
          onSubmit={createAdminData}
          className="flex flex-col w-3/6 mx-auto"
        >
          <label htmlFor="username" className="text-center mt-4">
            UserName
          </label>
          <input
            type="text"
            placeholder="username"
            name="username"
            className="bg-slate-500 rounded"
          />
          <label htmlFor="password" className="text-center">
            Password
          </label>
          <input
            type="text"
            placeholder="password"
            name="password"
            className="bg-slate-500 rounded"
          />
          <button
            type="submit"
            className="bg-slate-800 rounded text-white w-24 mx-auto mt-4 p-4 hover:bg-slate-400"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
