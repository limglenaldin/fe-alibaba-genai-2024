import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatToIDR } from "@/lib/utils";
import Image from "next/image";
import { MouseEvent } from "react";

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="shadow-md">
      <CardContent className="flex flex-row !pt-6 gap-4">
        <Image
          src={product.Image}
          alt={product.Name}
          width={50}
          height={50}
        />
        <div>
          <h6 className="text-xl font-semibold"> { product.Name } </h6>
          <p className="text-sm"> { formatToIDR(product.Price) }</p>
          <p className="text-sm"> Jumlah Pembelian { product.Quantity } pcs</p>
        </div>
      </CardContent>
    </Card>
  )
}