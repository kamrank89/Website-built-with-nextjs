import dataBaseConnection from "../database/connection";
import Link from "next/link";
import Token from "../database/models/admintoken";
import DashboardForm from "../components/forms/dashboardform";

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
      <div>
        <div>
          <h1>you are authorized</h1>
        </div>

        <div>
          <DashboardForm />
        </div>
        <div>
          <Link href="/">
            <button onClick={deleteItem} className="bg-slate-300">
              Log Out!
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1> You are not authorized to access this page please Log in !!! </h1>
      <Link href="/adminloginpage">Log In</Link>
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps() {
  await dataBaseConnection();
  const tokens = await Token.find({});
  console.log(tokens);
  return { props: { tokens: JSON.parse(JSON.stringify(tokens)) } };
}
