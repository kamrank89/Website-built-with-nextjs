import Card from "../../components/card/card";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import dataBaseConnection from "../../database/connection";
import Link from "next/link";
import Item from "../../database/models/items";

export default function ProductPage({ items }) {
  /* User view */

  return (
    <div className="min-h-screen flex flex-col bg-slate-200">
      <Header />
      <div className="flex flex-wrap ml-20 mt-4 mb-4 z-0">
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
                  price={item.price}
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

export async function getServerSideProps(context) {
  await dataBaseConnection();
  const items = await Item.find({});
  return {
    props: {
      items: JSON.parse(JSON.stringify(items)),
    },
  };
}
