import { getJsonPath, saveToJson, formatDataToResponse } from "@/helpers/api";
import { validateJson } from "@/helpers/validate";
import { generateRandomString } from "@/helpers/str";

const createRules = {
    name: "required|maxString:1000",
    image: "required",
    description: "required|maxString:10000",
};

export default function handler(req, res) {
    const { 
        name = "",
        image = "",
        description = "",
    } = req.body;

    const data = {
        id: generateRandomString(),
        name, 
        image, 
        description,
    }

    return createFunc(req, res, data, "product", createRules);
}