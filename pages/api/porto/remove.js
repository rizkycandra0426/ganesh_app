import { getJsonPath, saveToJson } from "@/helpers/api";

export default function handler(req, res) {
    if (req.method !== 'DELETE') {
        return res.status(405).json({ "message": 'Method Not Allowed' });
    }
    const { id } = req.query;
    if(!id) {
        return res.status(400).json({ "message": "Missing id in query params" });
    }
    const jsonPath = getJsonPath("porto");
    saveToJson(null, jsonPath, id);
    return res.status(200).json({ "message": "Deleted" });
}