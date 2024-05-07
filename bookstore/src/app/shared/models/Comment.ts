export interface Comment {
    id: string,
    bookid: string,
    username: string;
    stars?: number;
    comment: string;
    date: Date;
}