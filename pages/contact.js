import Footer from "../components/footer/footer";
import Header from "../components/header/header";

export default function contact() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-200">
      <Header />
      <h1>this is contact page </h1>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
