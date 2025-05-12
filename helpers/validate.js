const arrayValidation = (data, params) => {
    if(!Array.isArray(data)) {
        return false;
    }
    let valid = true;
    if(params.length > 0) {
        const t = params[0];
        data.forEach(d => typeof d !== t ? valid = false : null);
    }
    return valid && data.length > 0;
}

const inValidation = (data, params) => {
    return params.includes(data);
};

const isNumberValidation = (data, params) => {
    return (typeof data !== 'number' && !isNaN(data)) || !isNaN(Number(data));
};

const minValidation = (data, params) => {
    if(!isNumberValidation(data) || params.length < 0) {
        return true;
    }
    return data >= params[0];
};

const maxValidation = (data, params) => {
    if(!isNumberValidation(data) || params.length < 0) {
        return true;
    }
    return data <= params[0];
};

const requiredValidation = (data, params) => { 
    return !data ? false : true;
};

const maxStringValidation = (data, params) => {
    if(typeof data !== "string" || params.length < 0) {
        return true;
    }
    if(!isNumberValidation(params[0])) {
        return true; 
    }
    return data.length <= params[0];
};

const rules = {
    required : {
        validate: requiredValidation,
        message: "{field} is required",
    },
    in : {
        validate: inValidation,
        message: "{field} value must be in {params}",
    },
    min : {
        validate: minValidation,
        message: "{field} value must be less than {0}",  
    },
    max : {
        validate: maxValidation,
        message: "{field} value must be higher than {0}",  
    },
    number : {
        validate: isNumberValidation,
        message: "{field} must be a number"
    },
    maxString: {
        validate: maxStringValidation,
        message: "maximum value of {field} is {0} character"
    },
    array: {
        validate: arrayValidation,
        message: "{field} must be an array {0}"
    }
}

const formatMessage = (msg, field, params) => {
    if (msg.includes("{params}")) {
        msg = replaceAll("{params}", params.joins(","));
    }else {
        params.forEach((param, index) => {
            msg = msg.replaceAll(`{${index}}`, param);
        });
    }
    return msg.replaceAll("{field}", field);
}

const explodeRule = (rule) => {
    const [ key, paramsString = "" ] = rule.split(":");
    const params = paramsString.split(",");
    const ruleSettings = rules[key];
    if(!ruleSettings) {
        return { func: null, message: "", params: ""};
    }
    return { func: ruleSettings.validate,  message: ruleSettings.message, params }; 
}

const explodeRules = (ruleString) => {
    return ruleString.split("|");
};

export const validateJson = (data, rules) => {
    let fails = {};
    let isFail = false;
    Object.entries(data).forEach(([key, value]) => {
        const ruleString = rules[key]
        if(!ruleString) {
            return;
        }
        const ruleExploded = explodeRules(ruleString);
        ruleExploded.forEach((rule) => {
            const { func, message, params } = explodeRule(rule);
            if(!func) {
                return;
            }
            if (!func(value, params)) {
                fails[key] = [...fails[key] ? fails[key] : [], formatMessage(message, key, params)];
                isFail = true;
            }
        });
    });
    return isFail ? fails : false;
};