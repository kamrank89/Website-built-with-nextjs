import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import dataBaseConnection from "../../database/connection";
import Item from "../../database/models/items";

const ProductId = ({ item }) => {
  const router = useRouter();
  const idOfProduct = router.query.id;

  return (
    <div>
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
