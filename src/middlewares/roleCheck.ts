// import { Request, Response, NextFunction } from 'express';

// export const roleCheck = (role: 'admin' | 'student') => {
//     return (req: Request, res: Response, next: NextFunction) => {
//         if (req.user?.role !== role) {
//             return res.status(403).json({ message: "Forbidden: You don't have permission to perform this action." });
//         }
//         next();
//     };
// };
