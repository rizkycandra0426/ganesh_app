import { updateFunc } from "@/helpers/api-func";

const updateRules = {
    name: "maxString:1000",
    location: "maxString:1000",
    land_area: "number|min:0",
    building_area: "number|min:0",
    duration: "number|min:0",
    description: "maxString:10000",
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

    return updateFunc(req, res, data, "porto", updateRules);
}