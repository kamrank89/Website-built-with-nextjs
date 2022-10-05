import Head from "next/head";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import dataBaseConnection from "../database/connection";
import Product from "../database/models/productmodel";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col bg-slate-200">
        <Header />
        <form
          action="/api/database/adddata"
          method="post"
          encType="multipart/form-data"
        >
          <input
            spellCheck="off"
            placeholder="title-items"
            type="text"
            className="m-3 bg-gray-400 placeholder-black placeholder-opacity-50"
            name="title"

            // onClick={deleteTest}
          />
          <input
            spellCheck="off"
            placeholder="body-items"
            type="text"
            className="m-3 bg-gray-400 placeholder-black placeholder-opacity-50"
            name="body"

            // onClick={deleteTest}
          />
          <input
            spellCheck="off"
            placeholder="image-items"
            type="file"
            className="m-3 bg-gray-400 placeholder-black placeholder-opacity-50"
            name="image"

            // onClick={deleteTest}
          />
          <button className="bg-gray-300 rounded" type="submit">
            Submit
          </button>
        </form>
        {products.map((product) => (
          <div key={product._id}>
            <h1> Title : {product.title}</h1>
            <h1> body : {product.body}</h1>
            <Image
              src="https://res.cloudinary.com/dz9jupdkl/image/upload/v1664985718/lihsiescy41ulfpfrsga.jpg"
              alt="test"
              width={100}
              height={100}
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
