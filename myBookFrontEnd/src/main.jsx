import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import routes from './routes';
import {createRoot} from 'react-dom/client';

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
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

createRoot(document.getElementById('root')).render(<App/>);