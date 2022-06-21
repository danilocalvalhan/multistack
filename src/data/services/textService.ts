export const TextService = {
    textLimiter(str: string, maxSize: number): string{
        if (str.length < maxSize){
            return str;
        } else {
            return str.slice(0, maxSize) + '...';
        }
    }
}