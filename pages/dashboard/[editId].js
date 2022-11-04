import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import dataBaseConnection from "../../database/connection";
import Item from "../../database/models/items";
import Image from "next/image";
import Token from "../../database/models/admintoken";
import Info from "../../database/models/adminmodel";
import Link from "next/link";
import EditPageForm from "../../components/forms/editpageform";

function Edit({ item, adminToken, cookieTokenId, adminInfo }) {
  const imagesLeft = (param) => {
    const row = [];
    for (let i = 4; param.images.length <= i; i--) {
      row.push(
        <div className="flex flex-col">
          <label>Image {i}</label>
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
          <div>
            <div> this is the edit page for {item._id}</div>
            <div> {item.shortDescription}</div>
            <div> {item.longDescription} </div>
            <div> {item.price} </div>
            <div>
              <EditPageForm
                api={`/api/database/itemcontent/${item._id}`}
                shortPlaceHolder={item.shortDescription}
                longPlaceHolder={item.longDescription}
                pricePlaceHolder={item.price}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-row">
              <p>this is the avatar </p>{" "}
              <Image
                src={item.cardImage}
                alt="avatar image"
                width={200}
                height={200}
                className="rounded"
              />
            </div>
            <div className="flex flex-row">
              {item.images.map((image, index) => (
                <div key={index}>
                  <Image
                    src={image}
                    alt="item images"
                    height={150}
                    width={150}
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
                <button
                  type="submit"
                  className="bg-slate-200 hover:bg-slate-600"
                >
                  {" "}
                  Submit
                </button>
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="mx-auto flex flex-col mt-8 space-y-8">
        <h1> You are not authorized to access this page please Log in !!! </h1>
        <Link href="/adminloginpage">
          <button className="bg-slate-500 hover:bg-slate-200 w-2/6 self-center rounded text-center">
            Log In
          </button>
        </Link>
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
