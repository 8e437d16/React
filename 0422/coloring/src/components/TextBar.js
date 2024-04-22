import React, { useState } from 'react'

export default function TextBar(props) {
    const [fontSize, setFontSize] = useState(80);

    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ padding: 0, margin: 0, fontSize: `${fontSize}px` }}>{props.text}</p>
            </div>

            <label>Font Size: {fontSize}px</label>
            &nbsp;
            <input type="range" min={0} max={100} value={fontSize} onChange={(x) => setFontSize(parseInt(x.target.value))} />
        </div>
    )
}
