'use client'

import { useEffect, useState } from "react";
import { apiConfig, apiHeaders } from "@/config/api";
import OrderCard from "@/components/custom/card/OrderCard";
import { useRouter } from "next/navigation";
import { useOrder } from "@/contexts/OrderContext";

export default function Home() {
  const router = useRouter();
  const { setOrder: setOrderContext } = useOrder();
  const [navTitle, setNavTitle] = useState<string>('Aktivitas')
  
  const [orders, setOrders] = useState<Order[]>([]);
  const [order, setOrder] = useState<Order>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleClickCard = (order: Order) => {
    console.log("Clicked")
    // setOrder(order);
    // setNavTitle("Pesanan Dalam Perjalanan")
  }

  const handleClickBtnChat = (order: Order) => {
    setOrderContext(order)
    router.push("/chat")
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
    return (
      <main className="container space-y-4 px-6">
        <h1>Loading</h1>
      </main>
    )
  }
  
  return (
    <>
      <div className="py-3 border-b-2 mb-6">
        <p className="px-6 text-lg font-bold">{ navTitle }</p>
      </div>
      <main className="container space-y-4 px-6">
        { orders.map(order => (
          <OrderCard
            key={order.OrderNumber}
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