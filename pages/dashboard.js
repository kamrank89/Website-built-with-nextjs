import dataBaseConnection from "../database/connection";
import Token from "../database/models/admintoken";
const Dashboard = ({ tokens }) => {
    const deleteItem = awync () => {
        const res = await fetch ('api/database/authenticatedadmin')
        // Todo : removing data request need to be added
    }
  return (
    <div>
      {tokens[0].title === "test" ? (
        <div>
          <h1>you are authorized</h1>

          <button onClick={deleteItem} className="bg-slate-300">
            Log Out!
          </button>
        </div>
      ) : (
        <div>
          <h1> You are not authorized to access this page</h1>{" "}
        </div>
      )}
    </div>
  );
};

export default Dashboard;

export const getServerSideProps = async () => {
  await dataBaseConnection();
  const tokens = await Token.find({});
  console.log(tokens);

  return { props: { tokens: JSON.parse(JSON.stringify(tokens)) } };
};
