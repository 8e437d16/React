import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Article(props) {
    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 16, lineHeight: 1.6 }} color="text.secondary" gutterBottom>
                    {props.date}
                </Typography>
                <Typography variant="h6" component="div" fontWeight="bold" sx={{ mb: 1 }}>
                    {props.title}
                </Typography>
                <Typography sx={{ mb: 1 }} color="text.secondary">
                    {props.category}
                </Typography>
                <Typography variant="body2" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
                    {props.body}
                </Typography>
            </CardContent>
        </React.Fragment>
    );

    return (
        <div style={{ marginBottom: '15px' }}>
            <Box>
                <Card variant="outlined">{card}</Card>
            </Box>
        </div>
    )
}
