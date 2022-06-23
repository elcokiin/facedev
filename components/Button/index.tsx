import { colors } from '../../styles/theme';

type Props = {
    children: React.ReactNode,
    onClick: () => void
}

const Button: React.FC<Props> = ({children, onClick}) => {
    return (
        <>
            <button onClick={onClick}>
                {children}
            </button>
            <style jsx>{`
                button {
                    display: flex;
                    align-items: center;
                    padding: 12px 16px;
                    border-radius: 4px;
                    background-color: ${colors.primary};
                    color: ${colors.white};
                    font-size: 16px;
                    font-weight: 800;
                    margin: 8px 0;
                    cursor: pointer;
                    border: none;
                    transition: opacity .3s ease-in-out;
                }
                button > :global(svg) {
                    margin-right: 8px;
                }

                button:hover {
                    opacity: .8;
                }
            `}</style>
        </>
    )
}

export default Button