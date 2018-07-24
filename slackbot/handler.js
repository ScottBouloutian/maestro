module.exports.maestro = (event, context, callback) => {
    const verificationToken = process.env.VERIFICATION_TOKEN;

    function createResponse(code, body) {
        return {
            body,
            statusCode: code,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'text/plain',
            },
        };
    }

    const body = JSON.parse(event.body);
    switch (body.type) {
    case 'url_verification':
        if (body.token === verificationToken) {
            callback(null, createResponse(200, body.challenge));
        } else {
            callback(null, createResponse(400, {
                error: 'invalid verification token',
            }));
        }
        break;
    default:
        callback(null, createResponse(500, {
            error: 'unrecognized type',
        }));
    }
};
