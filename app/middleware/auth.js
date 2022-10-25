import jwt from 'jsonwebtoken'
import { JWT_SIGN_SECRET } from '../utils/jwt.utils.js';
export const auth = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, JWT_SIGN_SECRET);

        console.log(decodedToken)
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId
        };
        next();

    } catch (error) {
        res.status(401).json({ error });
    }
}