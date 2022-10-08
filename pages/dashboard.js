import dataBaseConnection from "../database/connection";
import Link from "next/link";
import Token from "../database/models/admintoken";

const Dashboard = (tokens) => {
  // const deleteItem = async () => {
  //   const res = await fetch("api/database/authenticatedadmin");
  // };
  //   // TODO :  removing data request need to be added
  // };
  if (tokens.tokens[0]) {
    return (
      <div>
        <h1>you are authorized</h1>

        <Link href="/">
          <button className="bg-slate-300">Log Out!</button>
        </Link>
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
