import React from 'react';
import {useSelector} from "react-redux";

const SearchBar = () => {
    return (
        <div>
            <input
                id="search"
                name="search"
                className="block w-full rounded-md border-2 border-gray-800 bg-transparent py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Search"
                type="search"
            />
        </div>
    );
};

export default SearchBar;
