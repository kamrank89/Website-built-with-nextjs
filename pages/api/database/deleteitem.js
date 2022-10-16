import Item from "../../../database/models/items";
import dataBaseConnection from "../../../database/connection";
import nc from "next-connect";

const apiRouter = nc({
  onNoMatch(req, res) {
    res.statusCode(405), json({ error: `method ${req.method} not allowed` });
  },
});
apiRouter.delete((req, res) => {
  const itemId = req.body.data;
  dataBaseConnection();
  const itemToBeDeleted = Item.findOneAndDelete(
    { _id: itemId },
    (err, founditem) => {
      if (err) console.log(err);
      return console.log(`${founditem._id} has been found and been deleted`);
    }
  );

  res.status(200).json("item has benn removed");
});

export default apiRouter;
