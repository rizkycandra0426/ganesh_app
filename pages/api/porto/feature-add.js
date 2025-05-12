import { formatDataToResponse, getJsonFile, getJsonPath, saveToJson } from "@/helpers/api";
import { validateJson } from "@/helpers/validate";

const addFeatureRules = {
    features: "array:string",
};

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ "message": 'Method Not Allowed' });
    }
    const { id } = req.query;
    if(!id) {
        return res.status(400).json({ "message": "Missing id in query params" });
    }
    const { features = [] } = req.body;
    const fails = validateJson({ features }, addFeatureRules);
    if(fails) {
        return res.status(400).json({...formatDataToResponse(fails, "Invalid validation")});
    }
    const jsonPath = getJsonPath("porto");
    const jsonData = getJsonFile(jsonPath, false);
    let datas = jsonData["datas"] ?? [];
    let data = {};
    datas.forEach((d) => {
        if(d["id"] === id) {
            data = d;
        }
    });
    if(!data["id"]) {
        return res.status(404).json({"message": "Not Found"});
    }
    data["features"] = [...data["features"], ...features];
    saveToJson(data, jsonPath, id);
    return res.status(200).json({ "message": `Feature added to ${id}` });
}