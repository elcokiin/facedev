import css from 'styled-jsx/css'

export const globalStyles = css.global`
    body {
        background-image: radial-gradient(circle at top, #f6f6f6, var(--white));
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
        width: var(--break-points-mobile);
        height: 90vh;
        background: var(--white);
        border-radius: 8px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    }
`