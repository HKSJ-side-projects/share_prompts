import Nav from '@components/nav';
import '@styles/globals.css';

export const metadata = {
    title: "Promptopia",
    description: 'Discover and sharte AT prompts'
}

const RootLayout = ({ children }) => {
    return (
        <html>
            <body>
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout