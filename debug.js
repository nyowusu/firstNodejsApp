import { createServer } from "http";

function process_request(req, res) {
    var body = "Thanks for calling!\n";
    var content_length = body.lenggth;
    res.writeHead(200, {
        'Content-Length':content_length,
        'Content-Type':'text/plain'
    });
    res.end(body);
}

var s = createServer(process_request);
s.listen(8080);