import { updateFunc } from "@/helpers/api-func";

const updateRules = {
    name: "required|maxString:1000",
    image: "required",
    description: "required|maxString:1000",
};

export default function handler(req, res) {    
    const { 
        name = "", 
        image = "",
        description = "",
    } = req.body;

    let data = {
        name, 
        image,
        description
    }

    return updateFunc(req, res, data, "product", updateRules);
}