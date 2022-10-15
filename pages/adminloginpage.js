import AdminLogin from "../components/adminlogin";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Header />
      </div>

      <div className="flex justify-center my-auto ">
        <AdminLogin api={"api/database/addadmindata"} />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
