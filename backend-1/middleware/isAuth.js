import jwt from "jsonwebtoken";
export const isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated"
            });
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) {
            return res.status(403).json({
                success: false,
                message: "Invalid token"
            });
        }
        req.id = verified.userId
        next();
    } catch (error) {
        console.log(error);
    }
}