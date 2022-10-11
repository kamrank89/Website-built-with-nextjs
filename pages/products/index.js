import Card from "../../components/card/card";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import dataBaseConnection from "../../database/connection";
import Link from "next/link";
import Item from "../../database/models/items";

export default function ProductPage({ items }) {
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

export async function getServerSideProps() {
  await dataBaseConnection();
  const items = await Item.find({});

  return {
    props: {
      items: JSON.parse(JSON.stringify(items)),
    },
  };
}
