import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import dataBaseConnection from "../../database/connection";
import Item from "../../database/models/items";
import Header from "../../components/header/header";
import Info from "../../database/models/adminmodel";
import Footer from "../../components/footer/footer";
import Token from "../../database/models/admintoken";

const ProductId = ({ item, adminInfo, cookieTokenId, adminToken }) => {
  console.log(adminInfo);
  console.log(cookieTokenId);
  console.log(adminToken);
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
  if (adminToken && cookieTokenId === adminInfo._id) {
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
        <Link
          href={{
            pathname: "/dashboard/[editId]",
            query: { editId: `${idOfProduct}` },
          }}
        >
          <a>
            <button> Edit page</button>
          </a>
        </Link>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    );
  }
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
  const cookieTokenId = context.req.cookies.tokenId || "no cookies";
  const adminInfo = await Info.findOne({ title: "admin" });
  const adminToken = await Token.findOne({ title: "test" });
  return {
    props: {
      item: JSON.parse(JSON.stringify(item)),
      adminInfo: JSON.parse(JSON.stringify(adminInfo)),
      adminToken: JSON.parse(JSON.stringify(adminToken)),
      cookieTokenId,
    },
  };
};
