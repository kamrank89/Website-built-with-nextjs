import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import dataBaseConnection from "../../database/connection";
import Product from "../../database/models/productmodel";

const ProductId = ({ item }) => {
  const router = useRouter();
  const idofproduct = router.query.id;

  return (
    <div>
      <h1>this page is {idofproduct}</h1>
      <Link href="/products"> a back to the product page</Link>
      <h1> item title is {item.title}</h1>
      <Image
        src={item.image}
        alt={item.title}
        width={1000}
        height={1000}
      ></Image>
    </div>
  );
};

export default ProductId;

export const getServerSideProps = async (context) => {
  await dataBaseConnection();
  console.log(context.params.id);
  const itemId = context.params.id;
  const item = await Product.findById(itemId);

  return {
    props: {
      item: JSON.parse(JSON.stringify(item)),
    },
  };
};
