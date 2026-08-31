
<!-- Topics to Learn -->

1- Node & Express Server Creation.

2- Routes.

3- Middleware.
 MiddleWare => Middleware aisa Function hota hai jo har Route se Pahele Chalta hai.
 eg: express.json() => for using JSON type Data, CORS() => .  
    - (req, res, next => Ye (min)teen cheezen dena Zaroori hai.)
    - req => it contains Users Data,  res => Servers Data,  next=> Pass/Push to Next Route.


4- Route Parameters. (Dynamic Routing)
    Dynamic Route => Dynamic Route is used to Solve Routing of the Page who have similar starting route, like: facebook.com/profile & changeAble part like: facebook.com/profile/:username.
    -it Helps to avoide writing route for all the Usernames.