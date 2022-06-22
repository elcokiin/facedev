import styles, { globalStyles } from './styles'

type Props = {
    children: React.ReactNode
}

const AppLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <div>
                <main>
                    {children}
                </main>
            </div>
            <style jsx>{styles}</style>
            <style jsx global>{globalStyles}</style>
        </>        
    )
}

export default AppLayout