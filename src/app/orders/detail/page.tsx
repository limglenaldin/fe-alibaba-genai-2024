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
        <Button asChild>
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
            </svg>
          </Link>
        </Button>
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