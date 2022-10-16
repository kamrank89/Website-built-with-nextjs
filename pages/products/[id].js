import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import dataBaseConnection from "../../database/connection";
import Item from "../../database/models/items";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const ProductId = ({ item }) => {
  const router = useRouter();
  const idOfProduct = router.query.id;
  const deleteItem = async (itemId) => {
    const reqBody = { data: itemId };
    const res = await fetch("/api/database/deleteitem", {
      method: "delete",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reqBody),
    });
    const resResult = await res.json();
    console.log(resResult);
    router.push("http://localhost:3000/products");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Header />
      </div>
      <div className="m-2">
        <h1>this page is {idOfProduct}</h1>
        <Link href="/products"> a back to the product page</Link>
        <h1> item title is {item.shortDescription}</h1>
        <h1>{item.longDescription}</h1>
        <h1> {item.price}</h1>
        <Image
          src={item.cardImage}
          alt="image test"
          width={300}
          height={300}
        ></Image>
        <Image
          src={item.images[0]}
          alt="image test"
          width={300}
          height={300}
        ></Image>
        <Image
          src={item.images[1]}
          alt="image test"
          width={300}
          height={300}
        ></Image>
      </div>
      <button onClick={() => deleteItem(idOfProduct)}> Delete Item</button>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ProductId;

export const getServerSideProps = async (context) => {
  await dataBaseConnection();
  console.log(context.params.id);
  const itemId = context.params.id;
  const item = await Item.findById(itemId);

  return {
    props: {
      item: JSON.parse(JSON.stringify(item)),
    },
  };
};
