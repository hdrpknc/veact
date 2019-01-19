# veact.js
A simple React approach with VanillaJS
## the idea
Using “virtual DOM” technology to create an element without actually writing it to the document. The html file has no elements. The html calls veact.js which changes the "virtual DOM".
## notes
* Testing locally is not possible because of CORS. That's why a webserver is needed. Unlike regular scripts, module scripts (and their imports) are fetched with CORS. This means cross-origin module scripts must return valid CORS headers such as Access-Control-Allow-Origin: *`
