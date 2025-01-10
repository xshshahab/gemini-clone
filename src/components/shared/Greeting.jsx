import React from 'react';

const Greeting = ({ name }) => (
    <center>
        <h1 className="text-4xl font-semibold text-transparent bg-gradient-to-r from-indigo-600 to-rose-500 bg-clip-text">
            Hello, {name}
        </h1>
    </center>
);

export default Greeting;
