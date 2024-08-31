interface Order {
    ID: number;
    OrderNumber: string;
    Merchant: Merchant;
    Items: Product[];
    IsIncludeCutlery: boolean;
}