import css from 'styled-jsx/css'
import { fonts, colors, breakPoints } from '../../styles/theme'


export const globalStyles = css.global`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: ${fonts.base};
        background-image: radial-gradient(circle at top, #eee, ${colors.white});
        background-position: 0 0, 25 25;
        background-size: 50px 50px;
    }
`

export default css`
    div {
        display: grid;
        place-items: center;
        height: 100vh;
    }
    main {
        width: 100%;
        height: 100%;
        background: ${colors.white};
        border-radius: 8px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    }
    @media (min-width: ${breakPoints.mobile}) {
        main {
            width: ${breakPoints.mobile};
            height: 90vh;
        }
    }
`