import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Logo } from './stories/foundations/Logo'
import { EchoMUIThemeProvider } from './stories/foundations/EchoMUITheme'
import { Button, Card, CardContent, Typography, Box, Stack } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <EchoMUIThemeProvider>
      <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
        <Stack spacing={4} alignItems="center">
          <Logo variant="full" color="brand" size="large" />

          <Stack direction="row" spacing={2} alignItems="center">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </Stack>

          <Typography variant="h3" component="h1" textAlign="center">
            Echo Design System + MUI
          </Typography>

          <Card sx={{ width: '100%', maxWidth: 400 }}>
            <CardContent>
              <Stack spacing={2} alignItems="center">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => setCount((count) => count + 1)}
                >
                  Count is {count}
                </Button>
                <Typography variant="body1" textAlign="center">
                  Echo design tokens + MUI functionality working together!
                </Typography>
              </Stack>
            </CardContent>
          </Card>

          <Typography variant="body2" color="text.secondary" textAlign="center">
            Your design system now has MUI components styled with Echo tokens
          </Typography>
        </Stack>
      </Box>
    </EchoMUIThemeProvider>
  )
}

export default App
