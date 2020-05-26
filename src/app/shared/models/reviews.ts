export class IReviews {
    id: number;
    product: number;
    created_by: {
        id: number,
        username: string,
    };
    rate: number;
    text: string;
}

export class ICreatedReview {
    success: boolean;
    message?: string;
}