import { Request, RequestHandler, Response } from "express";
import extractKeywords from "../services/extract-keywords.service";


export const analyzeText: RequestHandler = async (req: Request, res: Response) => {
    const { text } = req.body;

    if (!text) {
        return res.render("index", {
            title: "FreqLab",
            message: "Please provide text",
            keywords: []
        });
    }

    const keywords = extractKeywords(text.toLowerCase());

    res.render("index", {
        title: "FreqLab",
        message: "Analysis completed",
        keywords
    });
}

export const renderFreqLab: RequestHandler = async (req: Request, res: Response) => {
    res.render("index", {
        title: "FreqLab",
        message: "EJS is working correctly",
        keywords: [] 
    });
}