import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import dataBaseConnection from "../../database/connection";
import Item from "../../database/models/items";
import Image from "next/image";
function Edit({ item }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        {" "}
        <Header />
      </div>
      <div className="m-2">
        <div> this is the edit page for {item._id}</div>
        <div> {item.shortDescription}</div>
        <div> {item.longDescription} </div>
        <div>
          {" "}
          <Image
            src={item.cardImage}
            alt="avatar image"
            width={400}
            height={400}
            className="rounded"
          />
          <div>
            {item.images.map((image) => (
              <div key={item.images[image]}>
                {" "}
                <Image src={image} alt="item images" height={300} width={300} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  await dataBaseConnection();
  const itemId = ctx.params.editId;
  const item = await Item.findById(itemId);

  return {
    props: {
      item: JSON.parse(JSON.stringify(item)),
    },
  };
};

export default Edit;
