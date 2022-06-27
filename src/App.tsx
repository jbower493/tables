import React from 'react';
import './index.css';
import SortedUsers from './components/users/sorted'
import FilteredUsers from './components/users/filtered'

function App() {
    return (
        <div className="app">
            <SortedUsers />
            {/* <FilteredUsers /> */}
        </div>
    );
}

export default App;
