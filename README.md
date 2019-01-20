# veact.js
A simple React approach with VanillaJS. This project is only a playground for learning purposes
## the idea
Using “virtual DOM” technology to create an element without actually writing it to the document. The html file has no elements. The html calls veact.js which changes the "virtual DOM".
## notes
* Opening index.html without a webserver is **not possible** because of CORS. Unlike regular scripts, module scripts (and their imports) are fetched with CORS. This means cross-origin module scripts must return valid CORS headers such as `Access-Control-Allow-Origin: *`
* To try locally use `node server.js`
