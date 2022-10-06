import AdminLogin from "../components/adminlogin";

export default function AdminLoginPage() {
  return (
    <div>
      <AdminLogin api={"api / database / addadmindata"} />
    </div>
  );
}
