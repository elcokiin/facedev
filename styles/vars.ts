import css from 'styled-jsx/css'

import { fonts, colors, breakPoints } from './theme'

export default css.global`
    * {
        /* colors */
        --white: ${colors.white};
        --primary: ${colors.primary};
        --secondary: ${colors.secondary};
        --red: ${colors.red};

        --font-base: ${fonts.base};
        --break-points-mobile: ${breakPoints.mobile};
    }
`