import dataBaseConnection from "../../database/connection";
import Link from "next/link";
import Token from "../../database/models/admintoken";
import DashboardForm from "../../components/forms/dashboardform";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Info from "../../database/models/adminmodel";
const Dashboard = (tokens, cookieTokenId, adminInfo) => {
  const deleteItem = async () => {
    const res = await fetch("api/database/addadmindata", {
      method: "DELETE",
    });
    const resJson = await res.json();
    console.log(resJson);
  };
  if (tokens.tokens[0] && tokens.cookieTokenId === tokens.adminInfo._id) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="flex flex-col ">
          <DashboardForm />
        </div>
        <div className="m-4 flex">
          <Link href="/">
            <button
              onClick={deleteItem}
              className="bg-slate-600 p-2 w-3/12 rounded mx-auto  hover:bg-slate-200"
            >
              Log Out!
            </button>
          </Link>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    );
  }
  /* Unauthorized user */
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="mx-auto flex flex-col mt-8 space-y-8">
        <h1> You are not authorized to access this page please Log in !!! </h1>
        <Link href="/adminloginpage">
          <button className="bg-slate-500 hover:bg-slate-200 w-2/6 self-center rounded text-center">
            Log In
          </button>
        </Link>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps(context) {
  await dataBaseConnection();
  const tokens = await Token.find({});
  const adminInfo = await Info.findOne({ title: "admin" });

  const cookieTokenId = context.req.cookies.tokenId || "";

  return {
    props: {
      tokens: JSON.parse(JSON.stringify(tokens)),
      cookieTokenId,
      adminInfo: JSON.parse(JSON.stringify(adminInfo)),
    },
  };
}
