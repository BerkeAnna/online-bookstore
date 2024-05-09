export interface OrderData {
    id: string;
    bankAccount: string;
    address: string;
    email: string;
    name: {
        firstname: string;
        lastname: string;
    }
}