/** @format */

import React from "react";

const Button = ({ name }) => {
    return (
        <button
            type="submit"
            className="inline-flex items-center p-2  m-2 mr-1 text-sm  font-medium text-black bg-gray-200 rounded-lg border border-gray-100 transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white focus:ring-2 focus:outline-none"
        >
            {name}
        </button>
    );
};

export default Button;
