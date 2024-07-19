import React from "react";


    <div>
        <h2>Ad List</h2>
            <ul>
        {ads.map((ad) => (
            <li key={ad.id}>
            <h3>{ad.title}</h3>
            <p>{ad.description}</p>
            </li>
        ))}
        </ul>
    </div>

export default AddList;