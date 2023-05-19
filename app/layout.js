import '../styles/globals.css'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='dark:bg-slate-900 dark:text-white md:container mx-auto py-2 px-4'>
                <header>
                    <div>
                        <a href="/" className="font-bold text-xl md:text-2xl mr-2 hover:text-blue-500">
                            Matthew Iannucci
                        </a>
                        <a href="/#portfolio" className="text-sm md:text-xl hover:text-blue-500 mx-2">
                            Portfolio
                        </a>
                    </div>
                </header>

                <main>{children}</main>

                <footer className='text-center'>
                    <span className='text-xs'>Copyright 2023 - Matthew Iannucci</span>
                </footer>
            </body>
        </html>
    );
}