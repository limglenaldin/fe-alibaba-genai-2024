import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatToIDR } from "@/lib/utils";
import Image from "next/image";
import { MouseEvent } from "react";

interface OrderCardProps {
  order: Order
  handleClick: (order: Order) => void
  handleBtnClick: (e: MouseEvent<HTMLButtonElement>, order: Order, path: string) => void
}

export default function OrderCard({ order, handleClick, handleBtnClick }: OrderCardProps) {
  const grandTotalPrice = formatToIDR(order.Items.reduce(
    (total, item) => total + item.Price * item.Quantity, 0
  ))

  return (
    <Card className="shadow-md cursor-pointer" onClick={() => handleClick(order)}>
      <CardContent className="flex flex-row !pt-6 gap-4">
        <Image
          src={order.Merchant.Image}
          alt={order.Merchant.Name}
          width={50}
          height={50}
        />
        <div>
          <h6 className="text-xl font-semibold"> { order.Merchant.Name } </h6>
          <p className="text-sm"> { grandTotalPrice } </p>
        </div>
      </CardContent>
      <CardFooter className="gap-2 justify-end">
        <Button size="sm" onClick={(e) => handleBtnClick(e, order, "/chat")}>
          Chat
        </Button>
        <Button size="sm" onClick={(e) => handleBtnClick(e, order, "/chatai")}>
          AI
        </Button>
      </CardFooter>
    </Card>
  )
}