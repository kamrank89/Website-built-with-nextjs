import Item from "../../../../database/models/items";
import dataBaseConnection from "../../../../database/connection";
import nc from "next-connect";

const apiRouteredit = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});
apiRouteredit.get((req, res) => {
  res.status(200).json("this is edit item API");
});
apiRouteredit.post((req, res) => {
  dataBaseConnection();
  const modifiedItem = Item.findOneAndUpdate(
    { _id: req.query.edititemcontent },
    {
      shortDescription: req.body.shortDescription,
      longDescription: req.body.longDescription,
      price: req.body.itemPrice,
    },
    (err, updatedItem) => {
      if (err) console.log(err);
      console.log(`${updatedItem} has been updated`);
    }
  );

  res.redirect(`/products/${req.query.edititemcontent}`);
});

export default apiRouteredit;
