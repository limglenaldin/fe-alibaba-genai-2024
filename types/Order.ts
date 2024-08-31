interface Order {
    id: number;
    orderNumber: string;
    merchant: Merchant;
    items: Product[];
    isIncludeCutlery: boolean;
}