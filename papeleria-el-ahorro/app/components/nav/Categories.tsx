'use client'

import Container from "../Container";
import { categories } from "@/utils/Categories";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

const Categories = () => {
  const params = useSearchParams();
  const pathname = usePathname();

  const isMainPage = pathname === "/";
  if (!isMainPage) return null;

  return (
    <div className="text-white" style={{ background: "#3c3c3b" }}>
    <Container>
      <div className="pt-2 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((categoryItem, index) => (
          <div key={index}>
            <Link href={`/${encodeURIComponent(categoryItem.label.toLowerCase())}`}>
              <div className="flex items-center">
                <categoryItem.icon />
                <span className="ml-1">{categoryItem.label}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  </div>
  );
};

export default Categories;
