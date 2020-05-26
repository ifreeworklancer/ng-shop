export class IUser {
    id: number;
    username: string;
    password: string;
    token: string;
}

export class ICurrentUser {
    success: boolean;
    token: string;
    message?: string;
}