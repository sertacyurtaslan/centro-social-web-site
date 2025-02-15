export interface Volunteer {
    id: string;
    name: string;
    description: {
        pt: string;
        en: string;
    };
    photoUrl: string;
    createdAt: Date;
} 