import AdminNav from "../components/admin/AdminNav";

export const metadata={
  title:"Admin Electrocréditos el Ahorro",
  description:"Admin panel for the ecommerce platform.",
}


const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
