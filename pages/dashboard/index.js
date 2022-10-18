import dataBaseConnection from "../../database/connection";
import Link from "next/link";
import Token from "../../database/models/admintoken";
import DashboardForm from "../../components/forms/dashboardform";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Dashboard = (tokens) => {
  const deleteItem = async () => {
    const res = await fetch("api/database/addadmindata", {
      method: "DELETE",
    });
    const resJson = await res.json();
    console.log(resJson);
  };
  console.log(tokens.tokens[0]);
  if (tokens.tokens[0]) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <div className="flex flex-col ">
          <DashboardForm />
        </div>
        <div>
          <Link href="/">
            <button onClick={deleteItem} className="bg-slate-300">
              Log Out!
            </button>
          </Link>
          <Link href="/">
            <button className="bg-slate-300 m-2">Home Page!</button>
          </Link>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    );
  }
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

export async function getServerSideProps() {
  await dataBaseConnection();
  const tokens = await Token.find({});

  return { props: { tokens: JSON.parse(JSON.stringify(tokens)) } };
}