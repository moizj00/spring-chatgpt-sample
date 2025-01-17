export interface Message {
    id: string;
    senderId: string;
    recipientId: string;
    content: string;
    timestamp: Date;
}

export interface User {
    id: string;
    username: string;
    email: string;
}