import React, { useState } from 'react'
import ColorBar from './ColorBar';

export default function Header() {
    const [headerWidth, setHeaderWidth] = useState(50);
    const [headerColorR, setHeaderColorR] = useState(getRandomInt(0, 256));
    const [headerColorG, setHeaderColorG] = useState(getRandomInt(0, 256));
    const [headerColorB, setHeaderColorB] = useState(getRandomInt(0, 256));

    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // 최댓값은 제외, 최솟값은 포함
    }

    return (
        <div>
            <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <ColorBar width={headerWidth} r={headerColorR} g={headerColorG} b={headerColorB} />

                    <label>Width: {headerWidth}%</label>
                    <input type="range" min="0" max="100" value={headerWidth} onChange={(x) => setHeaderWidth(parseInt(x.target.value))} />

                    <label>R: {headerColorR}</label>
                    <input type="range" min="0" max="255" value={headerColorR} onChange={(x) => setHeaderColorR(parseInt(x.target.value))} />
                    <label>G: {headerColorG}</label>
                    <input type="range" min="0" max="255" value={headerColorG} onChange={(x) => setHeaderColorG(parseInt(x.target.value))} />
                    <label>B: {headerColorB}</label>
                    <input type="range" min="0" max="255" value={headerColorB} onChange={(x) => setHeaderColorB(parseInt(x.target.value))} />
                </div>
            </div>
        </div>
    )
}
