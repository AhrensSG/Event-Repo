import React from "react";

<form>
    <h2>Add New Ad</h2>
        <div>
            <h3>Title:</h3>
            <input
                type="text"
                value={title}
            />
        </div>
        <div>
            <h3>Description:</h3>
            <textarea
                value={description}
            />
        </div>
    <button type="submit">Add Ad</button>
</form>

export default AddForms;