import { createTheme } from '@mui/material';
import { red, grey } from '@mui/material/colors'

const defaultTheme = createTheme({
    palette:{
        primary:{
            main: red[400],
            dark: red[600],
            light: red[200],
            contrastText: '#ffffff'
        },
        secondary: {
            main: grey[500],
            dark: grey[700],
            light: grey[300],
            contrastText: '#ffffff'
        },
        background: {
            paper: '#ffffff',
            default: '#f7f6f3'
        }
    },
    typography:{
        fontFamily: 'arial',
        h2:{
            color: '#ffffff',
            alignItems: 'center',
            justifyItems: 'center',
            alignContent: 'center',

        },
        body1:{
            color: 'black',
        },
        body2:{
            color: '#ffffff',
        }
    },

})

export default defaultTheme