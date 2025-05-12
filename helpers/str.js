export const generateRandomString = (length = 8) => {
    const randomPart = Math.random().toString(36).substring(2, 2 + length);
    const timestampPart = Date.now().toString(36);
    return `${randomPart}${timestampPart}`;
};