import dataBaseConnection from "../database/connection";
import Token from "../database/models/admintoken";

const Dashboard = (tokens) => {
  // const deleteItem = async () => {
  //   const res = await fetch("api/database/authenticatedadmin");
  // };
  //   // TODO :  removing data request need to be added
  // };

  return (
    <div>
      {tokens.tokens[0].title === "test" ? (
        <div>
          <h1>you are authorized</h1>

          <button className="bg-slate-300">Log Out!</button>
        </div>
      ) : (
        <div>
          <h1> You are not authorized to access this page !!! </h1>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

export async function getServerSideProps() {
  await dataBaseConnection();
  const tokens = await Token.find();
  console.log(tokens);
  return { props: { tokens: JSON.parse(JSON.stringify(tokens)) } };
}
