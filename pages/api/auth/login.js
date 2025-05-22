import { formatDataToResponse } from "@/helpers/api";
import { createSession } from "@/helpers/auth";
import { validateJson } from "@/helpers/validate";

const loginRules = {
    username: "required",
    password: "required",
};

export default function handler (req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ "message": 'Method Not Allowed' });
    }
    const { 
        username = "", 
        password = "", 
        remember = false,
    } = req.body;

    const data = {
        username,
        password
    }

    const fails = validateJson(data, loginRules);
    if(fails) {
        return res.status(400).json({...formatDataToResponse(fails, "Invalid validation")});
    }

    let msg = "Ok";
    let status = 200;

    const result = createSession(username, password, remember);
    if(!result["token"]) {
        msg = "Fail";
        status = 401;
    }
    return res.status(status).json({ ...formatDataToResponse(result, msg) });
}