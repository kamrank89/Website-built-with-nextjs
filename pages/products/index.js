import Card from "../../components/card/card";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import dataBaseConnection from "../../database/connection";
import Product from "../../database/models/productmodel";
import Link from "next/link";

export default function ProductPage({ products }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-200">
      <Header />
      this is the product page
      <div className="flex flex-wrap ml-16">
        {products.map((product) => (
          <div key={product._id}>
            <Link
              href={{
                pathname: "products/[id]",
                query: { id: `${product._id}` },
              }}
            >
              <a> item page</a>
            </Link>
            <Card
              image={product.image}
              title={product.title}
              body={product.body}
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
  const products = await Product.find({});
  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
