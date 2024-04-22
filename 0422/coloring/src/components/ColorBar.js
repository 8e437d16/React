import React from 'react'

export default function ColorBar(props) {
    function rgbToHtmlColor(r, g, b) {
        const hexR = r.toString(16).padStart(2, '0');
        const hexG = g.toString(16).padStart(2, '0');
        const hexB = b.toString(16).padStart(2, '0');
        
        return `#${hexR}${hexG}${hexB}`;
      }

  return (
    <div style={{ width: `${props.width}%`, height: '150px', background: `${rgbToHtmlColor(props.r, props.g, props.b)}` }}>
      
    </div>
  )
}
