interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    productWasted: ProductWaste[];
    price: number;
    quantity: number;
}

interface ProductWaste {
    id: number;
    name: string;
    isCutlery: boolean;
}