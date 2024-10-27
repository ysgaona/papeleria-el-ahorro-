import Link from "next/link";
import React from "react";


interface BreadCrumbItem {
  label: string;
  link?: string;
}

interface BreadcrumbProps {
  items: BreadCrumbItem[ ];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="mt-2 p-2" data-depth={items.length}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.link ? (
            <Link href={item.link}>
              <span className={index === items.length - 1 ? "text-black" : "text-gray-400 hover:text-black"}>
                {item.label}
              </span>
            </Link>
          ) : (
            <span className={index === items.length - 1 ? "text-black" : "text-gray-800 hover:text-black"}>
              {item.label}
            </span>
          )}
          {index < items.length - 1 && <span>{">"}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
