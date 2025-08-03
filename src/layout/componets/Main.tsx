import {Outlet} from "react-router-dom";

const Main = () => {
    return (
        <main className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Welcome to CryptoView
                </h1>
                <p className="text-xl text-gray-600">
                    The web for crypto lovers
                </p>
            </div>
            <Outlet />
        </main>
    )
}

export default Main;