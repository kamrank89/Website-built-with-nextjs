import Header from "../components/header/header";
import { useSession } from "next-auth/react";
import Footer from "../components/footer/footer";
export default function cart() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="min-h-screen flex flex-col">
        <div>
          <Header />
        </div>
        this is the cart page and you are authorized
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
