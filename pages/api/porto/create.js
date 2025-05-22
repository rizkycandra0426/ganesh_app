import { createFunc } from "@/helpers/api-func";
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

    return createFunc(req, res, data, "porto", createRules);
}