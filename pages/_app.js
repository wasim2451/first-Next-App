import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return <>
        {/* <h1> This is Header</h1> */}
        <Component {...pageProps} />
        {/* <footer>This is Footer !</footer> */}
    </>
}