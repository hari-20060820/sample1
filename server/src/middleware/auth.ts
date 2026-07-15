import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
export type AuthRequest = Request & { userId?:string };
export function auth(req:AuthRequest,res:Response,next:NextFunction) { const token=req.headers.authorization?.replace("Bearer ",""); if (!token) return res.status(401).json({error:"Authentication required"}); try { req.userId=(jwt.verify(token,process.env.JWT_SECRET ?? "development-secret") as {sub:string}).sub; next(); } catch { res.status(401).json({error:"Invalid access token"}); } }
