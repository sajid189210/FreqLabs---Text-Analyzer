import { IKeywordFreq } from "../interface/model.interface";
import STOP_WORDS from "../utils/stop-words.util";

const extractKeywords = (text: string): IKeywordFreq[] => {

    const cleanedText = text
        .toLowerCase()
        .replace(/[^\w\s]/g, '');

    const words = cleanedText
        .trim()
        .split(/\s+/);

    const freq: Record<string, number> = {};

    console.log(text)

    for (const word of words) {
        if (word.length < 3) continue;
        if (STOP_WORDS.has(word)) continue;

        freq[word] = (freq[word] || 0) + 1;
    }

    return Object.entries(freq)
        .sort((a, b) => b[1] - a[1])
        .map(([word, count]) => ({ word, count }))
}

export default extractKeywords;