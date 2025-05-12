import { getJsonPath, saveToJson, formatDataToResponse } from "@/helpers/api";
import { validateJson } from "@/helpers/validate";
import { generateRandomString } from "@/helpers/str";

const createRules = {
    name: "required|maxString:1000",
    category: "required",
    location: "required|maxString:1000",
    land_area: "required|number|min:0",
    building_area: "required|number|min:0",
    duration: "required|number|min:0",
    description: "required|maxString:10000",
    features: "array:string",
    images: "array:string",
};

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ "message": 'Method Not Allowed' });
    }
    const { 
        name = "", 
        location = "", 
        category = "",
        land_area, 
        building_area = 0, 
        duration = 0, 
        description = "", 
        features = [], 
        images = [],
    } = req.body;

    const data = {
        id: generateRandomString(),
        name, 
        location, 
        category,
        land_area, 
        building_area, 
        duration, 
        description, 
        features, 
        images
    }

    const fails = validateJson(data, createRules);
    if(fails) {
        return res.status(400).json({...formatDataToResponse(fails, "Invalid validation")});
    }

    const jsonPath = getJsonPath("porto");
    saveToJson(data, jsonPath);

    return res.status(201).json({ ...formatDataToResponse(data, "Created") });
}