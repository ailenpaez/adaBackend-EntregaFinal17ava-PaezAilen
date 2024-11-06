import { Model } from 'sequelize';

export interface AuthModel extends Model {
    id: number;
    userId: string;
    action: string;
    details: string;
    createdAt?: Date;
    updatedAt?: Date;
}
