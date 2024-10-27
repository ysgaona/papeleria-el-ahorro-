"use client";

import { Product, User } from "@prisma/client";
import { useEffect, useState } from "react";
import { formatPrice } from "@/utils/formatPrice";
import { formatNumber } from "@/utils/formatNumber";

interface SummaryProps {
  products: Product[];
  users: User[];
}

type SummaryDataType = {
  [key: string]: {
    label: string;
    digit: number;
  };
};

const Summary: React.FC<SummaryProps> = ({ products, users }) => {
  const [summaryData, setSummaryData] = useState<SummaryDataType>({
    products: {
      label: "Total Productos",
      digit: 0,
    },
    users: {
      label: "Total Usuarios",
      digit: 0,
    },
  });

  useEffect(() => {
    setSummaryData((prev) => {
      let tempData = { ...prev };
      tempData.products.digit = products.length;
      tempData.users.digit = users.length;

      return tempData;
    });
  }, [ products, users]);

  const summarykeys = Object.keys(summaryData);

  return (
    <div className="max-w-[1150px m-auto">
      <div className="mb-4 mt-2">
        <h1 className="text-center font-bold text-xl">Sistema de Gestión de Productos Electrocréditos el Ahorro</h1>
      </div>
      <div className="grid grid-cols-2 gap-3 max-h-50vh overflow-y-auto p-12">
        {summarykeys &&
          summarykeys.map((key) => {
            return (
              <div
                key={key}
                className="rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition"
              >
                <div className="text-xlmd:text-4xl font-bold">
                  {summaryData[key].label === "Total Sale" ? (
                    <>{formatPrice(summaryData[key].digit)}</>
                  ) : (
                    <>{formatNumber(summaryData[key].digit)}</>
                  )}
                </div>
                <div>{summaryData[key].label}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Summary;
