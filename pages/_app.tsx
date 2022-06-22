import globalStyles from '../styles/global'
import varsStyle from '../styles/vars'

type Props = {
    Component: any,
    pageProps: any
}

function App({ Component, pageProps }: Props) {
    return (
        <>
            <Component {...pageProps} />
            <style jsx global>{varsStyle}</style>
            <style jsx global>{globalStyles}</style>
        </>
    )
}

export default App