import React from 'react'
import Box from '@mui/material/Box'

export default function Header() {
  return (
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px', marginBottom: '70px' }}>
      <header style={{ height: '64px' }}>
        <p style={{ fontFamily: 'chomsky', fontSize: '48px' }}>Daily GPT</p>
      </header>
    </Box>
  )
}
