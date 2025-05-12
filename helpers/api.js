import fs from 'fs';
import path from 'path';

export const getJsonFile = (filePath, createIfNotExists = true) => {
    let jsonData = {};
    try {
        jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    }catch(err) {
        if(createIfNotExists && !fs.existsSync(filePath)) {
            fs.mkdirSync(path.dirname(filePath), { recursive: true }); 
            fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 4));
        }
    }
    return jsonData;
};

export const saveToJson = (newData, target, id = "") => {
    const jsonData = getJsonFile(target);
    if(!jsonData["datas"]) {
        jsonData["datas"] = [newData];
    } else {
        if(id && newData) {
            jsonData["datas"] = jsonData["datas"].map( (data) => data["id"] === id ? newData : data );
        }else if(id && !newData) {
            jsonData["datas"] = jsonData["datas"].filter( (data) => data["id"] !== id);
        }else {
            jsonData["datas"] = [...jsonData["datas"], newData];
        }
    }

    fs.writeFileSync(target, JSON.stringify(jsonData, null, 2));
}

export const formatDataToResponse = (datas, msg = "OK") => {
    return { "message": msg, "datas" : datas };
};

const resourcePathMap = {
    "porto": 'porto.json',
    "product": 'product.json',
}

export const getJsonPath = (resourceName) => {
    const jsonFileName = resourcePathMap[resourceName] ?? "";
    if(jsonFileName){
        return path.join(process.cwd(), `public/data/${jsonFileName}`);
    }
    return "";
}