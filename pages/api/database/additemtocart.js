import dataBaseConnection from "../../../database/connection";
import CartItems from "../../../database/models/usercart";
import nc from "next-connect";

const apiRouterCart = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});
apiRouterCart.get((req, res) => {
  res.status(200).json("add item to cart api");
});
apiRouterCart.post((req, res) => {
  dataBaseConnection();
  const userCart = new CartItems({
    shortDescription: req.body.shortDescription,
    price: req.body.price,
    cardImage: req.body.cardImage,
    userName: req.body.userName,
  });
  userCart.save((err) => {
    if (err) console.log(err);
    return console.log("Item has been added to cart");
  });
  res.status(200).json("all is good!");
});

export default apiRouterCart;
