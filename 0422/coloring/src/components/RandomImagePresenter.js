import React from 'react'

export default function RandomImagePresenter() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img style={{ borderRadius: '8px', boxShadow: '0 13px 27px -5px #32325d40,0 8px 16px -8px #0000004d,0 -6px 16px -6px #00000008' }} src="https://picsum.photos/512/256" width="auto" height="auto"/>
    </div>
  )
}
