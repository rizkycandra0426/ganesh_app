import { formatDataToResponse, getJsonFile, getJsonPath, saveToJson } from "@/helpers/api";
import { validateJson } from "@/helpers/validate";

const addimageRules = {
    images: "array:string",
};

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ "message": 'Method Not Allowed' });
    }
    const { id } = req.query;
    if(!id) {
        return res.status(400).json({ "message": "Missing id in query params" });
    }
    const { images = [] } = req.body;
    const fails = validateJson({ images }, addimageRules);
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
    data["images"] = [...data["images"], ...images];
    saveToJson(data, jsonPath, id);
    return res.status(200).json({ "message": `Image added to ${id}` });
}