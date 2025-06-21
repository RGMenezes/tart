import { setTimeout } from "timers";

export function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
export default async function* animationWordWrite(word: string, interval: number) {
    const listWord = word.split("");
  
    for (const char of listWord) {
        yield char;
        await wait(interval);
    }
}