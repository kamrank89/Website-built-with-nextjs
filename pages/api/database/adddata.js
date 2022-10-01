import dataBaseConnection from "../../../database/connection";
import Product from "../../../database/models/productmodel";

const addData = async (req, res) => {
  dataBaseConnection();
  const firstproduct = Product.create(req.body);
  res.json({ firstproduct });
};

export default addData;
