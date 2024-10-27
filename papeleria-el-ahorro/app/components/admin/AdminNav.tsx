"use client";

import Link from "next/link";
import Container from "@/app/components/Container";
import AdminNavItem from "./AdminNavItem";
import { MdDashboard, MdLibraryAdd ,MdDns} from "react-icons/md";
import { usePathname } from "next/navigation";


const AdminNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full shadow-sm top-20 border-b-[1px] pt-4">
      <Container>
        <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowwrap">
          <Link href="/admin">
            <AdminNavItem
              label="Resumen"
              icon={MdDashboard}
              selected={pathname === "/admin"}
            />
          </Link>
          <Link href="/admin/add-products">
            <AdminNavItem
              label="Añadir Productos"
              icon={MdLibraryAdd}
              selected={pathname === "/admin/add-products"}
            />
          </Link>
          <Link href="/admin/manage-products">
            <AdminNavItem
              label="Gestionar Productos"
              icon={MdDns}
              selected={pathname === "/admin/manage-products"}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AdminNav;
