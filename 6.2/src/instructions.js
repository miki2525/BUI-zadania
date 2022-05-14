import React from "react";

export default function Instructions({steps }) {

    const instr = steps.split('.');
    return (
        <div className="instructionsContainer">
            <h3>Instructions</h3>
            {instr.map((s, i) => (
                <p key={i}>{s}</p>
            ))}
        </div>
    );
}