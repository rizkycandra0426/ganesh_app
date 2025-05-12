import { getJsonPath, getJsonFile, saveToJson, formatDataToResponse } from "@/helpers/api";
import { compareUpdatedData } from "@/helpers/json";
import { validateJson } from "@/helpers/validate";

const updateRules = {
    name: "maxString:1000",
    location: "maxString:1000",
    land_area: "number|min:0",
    building_area: "number|min:0",
    duration: "number|min:0",
    description: "maxString:10000",
};

export default function handler(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).json({ "message": 'Method Not Allowed' });
    }
    const { id } = req.query;
    if(!id) {
        return res.status(400).json({ "message": "Missing id in query params" });
    }
    const jsonPath = getJsonPath("porto");
    const jsonData = getJsonFile(jsonPath, false);
    let datas = jsonData["datas"] ?? [];
    if(!datas.filter(data => data["id"] === id).length) {
        return res.status(404).json({"message": "Not Found"});
    }
    
    const { 
        name = "", 
        location = "", 
        category = "",
        land_area, 
        building_area = 0, 
        duration = 0, 
        description = "", 
    } = req.body;

    let data = {
        name, 
        location, 
        category,
        land_area, 
        building_area, 
        duration, 
        description, 
    }

    data = compareUpdatedData(datas, id, data);

    const fails = validateJson(data, updateRules);
    if(fails) {
        return res.status(400).json({...formatDataToResponse(fails, "Invalid validation")});
    }

    saveToJson(data, jsonPath, id);
    return res.status(200).json({ ...formatDataToResponse(data, "Updated") });
}