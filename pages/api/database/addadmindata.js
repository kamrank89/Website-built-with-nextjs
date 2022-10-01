import dataBaseConnection from "../../../database/connection";
import Info from "../../../database/models/adminmodel";

const addAdminData = async (req, res) => {
  dataBaseConnection();
  const firstAdmin = Info.create(req.body);
  res.json({ firstAdmin });
};

export default addAdminData;
