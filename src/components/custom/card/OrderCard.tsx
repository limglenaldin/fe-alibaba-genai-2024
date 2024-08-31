import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface OrderCardProps {
  order: Order
  handleClick: (order: Order) => void
}

export default function OrderCard({ order, handleClick }: OrderCardProps) {
  const grandTotalPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(order.Items.reduce(
    (total, item) => total + item.Price * item.Quantity, 0
  ))

  return (
    <Card className="shadow-md" onClick={() => handleClick(order)}>
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
      <CardFooter className="justify-end">
        <Button asChild>
          <Link href="/chat">Chat</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}