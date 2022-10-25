import Card from "../../components/card/card";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import dataBaseConnection from "../../database/connection";
import Link from "next/link";
import Item from "../../database/models/items";
import Token from "../../database/models/admintoken";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import Info from "../../database/models/adminmodel";

export default function ProductPage({
  items,
  adminToken,
  adminInfo,
  cookieTokenId,
}) {
  const adminAccess = adminToken[0];

  const router = useRouter();
  const deleteItem = async (itemId) => {
    const reqBody = { data: itemId };
    const res = await fetch("/api/database/deleteitem", {
      method: "delete",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reqBody),
    });
    const resResult = await res.json();
    router.reload();
    console.log(adminAccess);
  };

  if (adminAccess && adminInfo._id === cookieTokenId) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-200">
        <Header />

        <div className="flex flex-wrap ml-16">
          {items.map((item) => (
            <div key={item._id}>
              <Link
                href={{
                  pathname: "products/[id]",
                  query: { id: `${item._id}` },
                }}
              >
                <a>
                  <Card
                    image={item.cardImage}
                    title={item.shortDescription}
                    body={item.longDescription}
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col bg-slate-200">
      <Header />
      this is the product page
      <div className="flex flex-wrap ml-16">
        {items.map((item) => (
          <div key={item._id}>
            <Link
              href={{
                pathname: "products/[id]",
                query: { id: `${item._id}` },
              }}
            >
              <a> item page</a>
            </Link>

            <Card
              image={item.cardImage}
              title={item.shortDescription}
              body={item.longDescription}
            />
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  await dataBaseConnection();
  const items = await Item.find({});
  const adminToken = await Token.find({});
  const adminInfo = await Info.findOne({ username: "admin" });
  const cookieTokenId = context.req.cookies.tokenId || "no cookies";
  return {
    props: {
      items: JSON.parse(JSON.stringify(items)),
      adminToken: JSON.parse(JSON.stringify(adminToken)),
      adminInfo: JSON.parse(JSON.stringify(adminInfo)),
      cookieTokenId,
    },
  };
}
