import { NextFunction, Request, RequestHandler, Response } from "express";
import AppError from "../utils/app-error.util";

export const validateAnalyzeText: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const { text } = req.body;

    if (typeof text !== "string") {
        throw new AppError('Invalid text.', 400);
    }

    if (!text || text.trim().length === 0) {
        throw new AppError('Invalid or empty text.', 400);
    }

    if (text.length > 1000) {
        throw new AppError('Text too long.', 413);
    }

    next();
}