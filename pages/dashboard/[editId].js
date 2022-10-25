import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import dataBaseConnection from "../../database/connection";
import Item from "../../database/models/items";
import Image from "next/image";
import Token from "../../database/models/admintoken";
import Info from "../../database/models/adminmodel";
function Edit({ item, adminToken, cookieTokenId, adminInfo }) {
  const imagesLeft = (param) => {
    const row = [];
    for (let i = 4; param.images.length <= i; i--) {
      row.push(
        <div className="flex flex-col">
          <label>this is a row</label>
          <input key={i} className="rounded" type="file" name="images" />
        </div>
      );
    }
    return row;
  };
  if (adminToken && cookieTokenId === adminInfo._id) {
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
              {item.images.map((image, index) => (
                <div key={index}>
                  <Image
                    src={image}
                    alt="item images"
                    height={300}
                    width={300}
                  />
                </div>
              ))}
            </div>
            <div> {console.log(item.images.length)}</div>
            <div className="flex bg-slate-500 w-1/6 justify-center">
              <form
                action={`/api/database/${item._id}`}
                method="post"
                encType="multipart/form-data"
                className="flex flex-col"
              >
                {imagesLeft(item)}
                <button type="submit"> Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    );
  }
  return (
    <div>
      <p> you are not authorized</p>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  await dataBaseConnection();
  const itemId = ctx.params.editId;
  const item = await Item.findById(itemId);
  const cookieTokenId = ctx.req.cookies.tokenId || "no cookies";
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

export default Edit;
