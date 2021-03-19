import React from 'react';
import { Outlet } from 'react-router-dom';

function Launch() {
    return (
      <div className="head-content">
        <h1>Welcome Product Launch</h1>
        <Outlet/>
      </div>
    )
}

export default Launch;