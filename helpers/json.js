export const filterData = (datas, query, additionalFilter = null) => {
    return datas.filter((data) => data["name"].toLowerCase().includes(query.toLowerCase()) && ((additionalFilter && additionalFilter(data)) || !additionalFilter));
};

export const compareUpdatedData = (datas, id, updated) => {
    let target = {};
    datas.forEach(data => data["id"] === id ? target = data : null);
    Object.entries(target).forEach(([key, value]) => {
        target[key] = updated[key] && key !== "id" ? updated[key] : value;
    });
    return target;
}

export const detailData  = (datas, id) => {
    datas.forEach((data) => {
        if(data["id"] === id) {
            return data;
        }
    });
    return {};
}

const resourcePathMap = {
    "porto": 'porto.json',
    "product": 'product.json',
}

export const getJsonPublicPath = (resourceName) => {
    const jsonFileName = resourcePathMap[resourceName] ?? "";
    if(jsonFileName){
        return `/data/${jsonFileName}`;
    }
    return "";
}