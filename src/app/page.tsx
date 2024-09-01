'use client'

import { MouseEvent, useEffect, useState } from "react";
import { apiConfig, apiHeaders } from "@/config/api";
import OrderCard from "@/components/custom/card/OrderCard";
import { useRouter } from "next/navigation";
import { useOrder } from "@/contexts/OrderContext";
import Loading from "@/components/custom/Loading";

export default function Home() {
  const router = useRouter();
  const { setOrder } = useOrder();
  
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleClickCard = (order: Order) => {
    setOrder(order);

    router.push(`/orders/detail`)
  }

  const handleClickBtnChat = (e: MouseEvent<HTMLButtonElement>, order: Order, path: string) => {
    e.stopPropagation();
    setOrder(order)
    router.push(path)
  }

  useEffect(() => {
    const fetchOrders = async () => {
      const apiResponse = await fetch(`${apiConfig.API_URL}/v1/orders`, {
        method: "GET",
        headers: apiHeaders
      });
      const res: APIResponse<Order[]> = await apiResponse.json();

      setOrders(res.data);
      setIsLoading(false);
    };

    fetchOrders();
  }, []);

  if (isLoading) {
    return <Loading />
  }
  
  return (
    <>
      <div className="py-3 border-b-2 mb-6">
        <p className="px-6 text-lg font-bold">Aktivitas Pemesanan</p>
      </div>
      <main className="container space-y-4 px-6 overflow-y-scroll">
        { orders.map(order => (
            <OrderCard
              key={order.OrderNo}
              order={order}
              handleClick={handleClickCard}
              handleBtnClick={handleClickBtnChat}
            />
          ))
        }
      </main>
    </>
  );
}