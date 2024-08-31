interface Product {
    ID: number;
    Name: string;
    Image: string;
    Description: string;
    Wastes: ProductWaste[];
    Price: number;
    Quantity: number;
}

interface ProductWaste {
    ID: number;
    Name: string;
    Type: string;
    Category: string;
}