import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';

const mimeToExt = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
    'application/pdf': 'pdf',
    'image/webp': 'webp',
};
const decodeBase64 = (encoded) => {
    if (!encoded) {
        return false;
    }
    return Buffer.from(encoded, 'base64');
}

const extractMimeAndFile = (encoded) => {
    const matches = encoded.match(/^data:(.*?);base64,(.*)$/);
    if (!matches || matches.length !== 3) {
        return;
    }
    return { 
        "mimeType": matches[1], 
        "data": matches[2], 
        "extension": mimeToExt[matches[1]] || 'bin' 
    };
}

const saveFileToPublic = (dir, extension, buff) => {
    const filename = `${Date.now()}-${randomUUID()}.${extension}`;
    const dirFileName = path.join(dir, filename);
    const filePath = path.join(process.cwd(), 'public', dirFileName);
    fs.writeFileSync(filePath, buff);
    return dirFileName;
}

export const saveJsonAsset = (encoded, dir) => {
    const { mimeType = "", data = "", extension = "bin" } = extractMimeAndFile(encoded);
    if(!mimeType || !data) {
        return "";
    }
    const buff = decodeBase64(data);
    if(!buff) {
        return "";
    }
    return saveFileToPublic(dir, extension, buff);
}

export const createPublicDir = (name) => {
    const fullPath = `images/${name.toLowerCase().replace(/[^a-zA-Z]/g, '').replaceAll(' ','-')}`;
    if(!fs.existsSync(fullPath)) {
        fs.mkdirSync(path.dirname(fullPath), { recursive: true }); 
    }
    return fullPath;
}