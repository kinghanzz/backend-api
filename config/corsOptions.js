// Import the list of allowed origins from a separate file
const allowedOrigins = require('./allowedOrigins');

const corsOptions = {
    origin: (origin, callback) => {
        // If the request's origin is in the allowedOrigins list or if there's no origin (e.g., non-browser requests like Postman), allow the request
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true); // Allow request
        } else {
            callback(new Error('Not allowed by CORS')); // Reject request
        }
    },
    credentials: true, // Enable credentials (cookies, authorization headers, TLS client certificates)
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

module.exports = corsOptions;
