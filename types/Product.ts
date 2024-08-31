interface Product {
    ID: number;
    Name: string;
    Image: string;
    Description: string;
    ProductWasted: ProductWaste[];
    Price: number;
    Quantity: number;
}

interface ProductWaste {
    ID: number;
    Name: string;
    IsCutlery: boolean;
}