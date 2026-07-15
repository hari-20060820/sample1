import jwt from "jsonwebtoken";
export function auth(req, res, next) { const token = req.headers.authorization?.replace("Bearer ", ""); if (!token)
    return res.status(401).json({ error: "Authentication required" }); try {
    req.userId = jwt.verify(token, process.env.JWT_SECRET ?? "development-secret").sub;
    next();
}
catch {
    res.status(401).json({ error: "Invalid access token" });
} }
