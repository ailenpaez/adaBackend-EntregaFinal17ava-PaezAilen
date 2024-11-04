import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import logger from '../utils/logger';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (token) {
        jwt.verify(token, JWT_SECRET, (err, user: any) => { 
            if (err) {
                logger.error(`Authentication error: ${err.message}`);
                return res.sendStatus(403);
            }
            (req as any).user = user; 
            next();
        });
    } else {
        logger.warn('Authorization token not provided');
        res.sendStatus(401);
    }
};

