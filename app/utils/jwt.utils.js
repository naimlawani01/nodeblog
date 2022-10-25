import jwt from 'jsonwebtoken';


export const JWT_SIGN_SECRET = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY2NjY4NDkwNCwiaWF0IjoxNjY2Njg0OTA0fQ.24W4brYACah_ehTKBqp0ePE6YVXj902atJbdHSWBh-w"
export const generateTokenForUser = (userData) => {
    return jwt.sign({
        userId: userData._id,
    }, JWT_SIGN_SECRET, {
        expiresIn: '24h'
    })
}