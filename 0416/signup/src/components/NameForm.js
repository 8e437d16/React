import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

export default function NameForm() {

    return (
        <Box sx={{ width: '320px' }}>
            <Stack spacing={2}>
                <TextField
                    label="성(선택사항)"
                />
                <TextField
                    error
                    label="이름"
                    helperText="이름을 입력하세요."
                    variant="standard"
                />
            </Stack>

        </Box>
    )
}
