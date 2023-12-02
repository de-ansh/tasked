import { Navbar } from "./_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100 flex">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
