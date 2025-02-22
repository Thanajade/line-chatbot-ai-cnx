const { setGlobalOptions } = require("firebase-functions/v2");
const { onRequest } = require("firebase-functions/v2/https");

setGlobalOptions({
    region: "asia-northeast1", // LINE Messenging Server : -low latency
    memory: "1GB",
    concurrency: 40 // 40 request per 1 instance MAX 1000 per instance
})

// function name : receive
// invoker : public allow CORS

exports.receive = onRequest({ invoker: "public" }, async (request, response) => {


    const events = request.body.events
    for (const event of events) {

        console.log(JSON.stringify(event));

    }

    return response.end();

});