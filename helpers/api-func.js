import { getJsonPath, getJsonFile, saveToJson, formatDataToResponse } from "@/helpers/api";
import { validateJson } from "@/helpers/validate";
import { authorize } from "./auth";
import { compareUpdatedData } from "./json";

export const createFunc = (req, res, data, dataType, rules) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ "message": 'Method Not Allowed' });
    }

    if(!authorize(req)) {
        return res.status(401).json({ "message": 'Unauthorize' });
    }

    const fails = validateJson(data, rules);
    if(fails) {
        return res.status(400).json({...formatDataToResponse(fails, "Invalid validation")});
    }

    const jsonPath = getJsonPath(dataType);
    saveToJson(data, jsonPath);

    return res.status(201).json({ ...formatDataToResponse(data, "Created") });
}

export const updateFunc = (req, res, data, dataType, rules) => {
    if (req.method !== 'PUT') {
        return res.status(405).json({ "message": 'Method Not Allowed' });
    }
    if(!authorize(req)) {
        return res.status(401).json({ "message": 'Unauthorize' });
    }
    const { id } = req.query;
    if(!id) {
        return res.status(400).json({ "message": "Missing id in query params" });
    }
    const jsonPath = getJsonPath(dataType);
    const jsonData = getJsonFile(jsonPath, false);
    let datas = jsonData["datas"] ?? [];
    if(!datas.filter(data => data["id"] === id).length) {
        return res.status(404).json({"message": "Not Found"});
    }
    data = compareUpdatedData(datas, id, data);

    const fails = validateJson(data, rules);
    if(fails) {
        return res.status(400).json({...formatDataToResponse(fails, "Invalid validation")});
    }

    saveToJson(data, jsonPath, id);
    return res.status(200).json({ ...formatDataToResponse(data, "Updated") });
}

export const removeFunc = (req, res, dataType) => {
    if (req.method !== 'DELETE') {
        return res.status(405).json({ "message": 'Method Not Allowed' });
    }
    if(!authorize(req)) {
        return res.status(401).json({ "message": 'Unauthorize' });
    }
    const { id } = req.query;
    if(!id) {
        return res.status(400).json({ "message": "Missing id in query params" });
    }
    const jsonPath = getJsonPath(dataType);
    saveToJson(null, jsonPath, id);
    return res.status(200).json({ "message": "Deleted" });
}