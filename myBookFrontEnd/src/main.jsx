import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { Router, Route, Link } from "react-router-dom";
import routes from './routes';

function App() {
const [data, setData] = useState([]);

useEffect(() => {
fetch("data.json", {
headers: {
"Content-Type": "application/json",
Accept: "application/json",
},
})
.then((response) => {
return response.json();
})
.then((json) =>
setData(json)
);
}, []);

useEffect(() => {
console.log(data);
}, [data]);

return (
<Router>
{routes.map((route, index) => (
<Route
       key={index}
       path={route.path}
       exact={route.exact}
       component={route.component}
     />
))}
</Router>
);
}

ReactDOM.render(<App />, document.getElementById("root"));




