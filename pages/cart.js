import Header from "../components/header/header";
import { useSession } from "next-auth/react";
import Footer from "../components/footer/footer";
import dataBaseConnection from "../database/connection";
import CartItems from "../database/models/usercart";
import { data } from "autoprefixer";

// TODO: need to impelemnt a way to show cart content based on user name

export default function cart(allCartItems) {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="min-h-screen flex flex-col">
        <div>
          <Header />
        </div>
        this is the cart page and welcome {session.user.name}
        <div className="mt-auto">
          {" "}
          <Footer />
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Header />
      </div>
      you are not authorized!
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  await dataBaseConnection();
  const allCartItems = await CartItems.find({});

  return {
    props: { allCartItems: JSON.parse(JSON.stringify(allCartItems)) },
  };
};
