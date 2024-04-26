import React from "react";

const Item = ({ name }) => {

    return (
        <div className="item" style={{
            width: "304px",
            height: "462px",
            backgroundColor: "blue",
        }}>
            { name }
        </div>
    );
};

export default Item;
