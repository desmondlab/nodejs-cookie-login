# nodejs-cookie-login

For the cookie api in express:<br />
http://expressjs.com/zh-tw/4x/api.html


Response (set up cookie in server and pass to the client): <br />
res.cookie(name, value [, options]) <br />
res.clearCookie(name [, options]) <br />


Request ( receive cookie from client): <br />
req.signedCookies

To use signed cookie in express, cookie-parser has to be used.
Although signed cookies will still be visible in the browser, but it has a signature, so it can detect if the client modified the cookie.


rel: <br />
1. https://stackoverflow.com/questions/11897965/what-are-signed-cookies-in-connect-expressjs <br />
2. http://cythilya.blogspot.hk/2015/08/node-cookie-and-session.html
