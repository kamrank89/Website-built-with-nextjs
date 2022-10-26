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
    router.push("http://localhost:3000/products");
  };
  const adminComponents = () => {
    const col = [];
    if (adminToken && cookieTokenId === adminInfo._id) {
      col.push(
        <div className="m-8 flex flex-col space-y-4 ">
          <div className="self-center">
            <button
              className="bg-slate-400 rounded  p-2 w-64 hover:bg-slate-600 "
              onClick={() => deleteItem(idOfProduct)}
            >
              {" "}
              delete item
            </button>
          </div>
          <div className="self-center">
            <Link
              href={{
                pathname: "/dashboard/[editId]",
                query: { editId: `${idOfProduct}` },
              }}
            >
              <a>
                <button className="bg-slate-400 rounded w-64 p-2 hover:bg-slate-600">
                  {" "}
                  Edit page
                </button>
              </a>
            </Link>
          </div>
        </div>
      );
    }
    return col;
  };
  const imageToShow = (param) => {
    const row = [];
    for (let i = 0; i < param.images.length; i++) {
      row.push(
        <div className="max-w-max transform  cursor-pointer block">
          <Image
            key={i}
            src={param.images[i]}
            alt="image test"
            width={300}
            height={300}
          ></Image>
        </div>
      );
    }
    return row;
  };

  /* User view */
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Header />
      </div>
      <div className="m-2">
        <h1> item title is {item.shortDescription}</h1>
        <h1>{item.longDescription}</h1>
        <h1> {item.price}</h1>
        <Image
          src={item.cardImage}
          alt="image test"
          width={500}
          height={500}
          className="cursor-pointer"
        ></Image>
      </div>
      <div>{imageToShow(item)}</div>
      {adminComponents()}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ProductId;

export const getServerSideProps = async (context) => {
  await dataBaseConnection();
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
