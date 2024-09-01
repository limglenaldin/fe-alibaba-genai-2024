'use client'

import ProductCard from "@/components/custom/card/ProductCard";
import { Button } from "@/components/ui/button";
import { useOrder } from "@/contexts/OrderContext";
import { formatToIDR } from "@/lib/utils";
import { Link } from "lucide-react";

export default function Detail() {
  const { order } = useOrder();
  const grandTotalPrice = formatToIDR(order?.Items.reduce(
    (total, item) => total + item.Price * item.Quantity, 0
  ) as number)
  
  return (
    <>
      <div className="py-3 border-b-2 mb-6 flex flex-row">
        <p className="px-6 text-lg font-bold">Detail Pemesanan {order?.OrderNo}</p>
      </div>
      <main className="container space-y-4 px-6 flex flex-col">
        <div className="overflow-y-auto">
          { order?.Items.map(item => (
              <ProductCard
                key={item.ID}
                product={item}
              />
            )) 
          }
        </div>
        <div className="mt-auto flex flex-row justify-between font-semibold">
          <p>Total Harga</p>
          <p>{ grandTotalPrice }</p>
        </div>
      </main>
    </>
  );
}