const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

export const createSession = (username, password, remember) => {
    const validUsername = process.env.ADMIN_USERNAME;
    const validEmail = process.env.ADMIN_EMAIL;
    const validPassword = process.env.ADMIN_PASSWORD;

    if((validUsername === username || validEmail === username) && validPassword === password) {
        const exp = remember ? '72h' : '4h';
        const token = jwt.sign({ username, "role": "admin" }, JWT_SECRET, {
            expiresIn: exp,
        });

        return {
            token,
            exp,
        }
    }

    return {
        "username": "Invalid username or password"
    }
}

export const authorize = (req) => {
    try {
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith('Bearer ')) {
            throw(null);
        }
        const token = authHeader.split(' ')[1];
        jwt.verify(token, JWT_SECRET);
        return true;
    }catch(err) {
        return false;
    }
}