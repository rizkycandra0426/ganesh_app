// import fs from 'fs';
import path from 'path';

export const getJsonFile = (filePath, createIfNotExists = true) => {
    // let jsonData = {};
    // try {
    //     jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    // }catch(err) {
    //     if(createIfNotExists && !fs.existsSync(filePath)) {
    //         fs.mkdirSync(path.dirname(filePath), { recursive: true }); 
    //         fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
    //     }
    // }
    // return jsonData;
};

export const filterData = (datas, query, additionalFilter = null) => {
    return datas.filter((data) => data["name"].toLowerCase().includes(query.toLowerCase()) && ((additionalFilter && additionalFilter(data)) || !additionalFilter));
};

export const detailData  = (datas, id) => {
    datas.forEach((data) => {
        if(data["id"] === id) {
            return data;
        }
    });
    return {};
}

export const updateData = (datas, newData, id) => {
    newData["id"] = id;
    datas = datas.map((data) => {
        if(data["id"] === id) {
            return newData;
        }
        return data;
    });
    return datas;
}


export const formatDataToResponse = (datas, msg = "OK") => {
    return { "message": msg, "datas" : datas };
};

export const saveToJson = (newData, target) => {
    // const jsonData = getJsonFile(target);
    // if(jsonData["datas"]){
    //     jsonData["datas"] = [...jsonData["datas"], newData];
    // }else {
    //     jsonData["datas"] = [newData];
    // }
    // fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
}

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

export const getJsonPublicPath = (resourceName) => {
    const jsonFileName = resourcePathMap[resourceName] ?? "";
    if(jsonFileName){
        return `/data/${jsonFileName}`;
    }
    return "";
}