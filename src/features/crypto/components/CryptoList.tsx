import useCrypto from "../../../hooks/useCrypto.tsx";
import CryptoCard from "./CryptoCard.tsx";

const CryptoList = () => {
    const { cryptos, loading, error } = useCrypto()

    if (loading) return (
        <div className="flex justify-center items-center min-h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-600"></div>
        </div>
    )

    if (error) return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex">
                <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Error</h3>
                    <p className="text-sm text-red-700 mt-1">{error}</p>
                </div>
            </div>
        </div>
    )

    if (cryptos.length === 0) return (
        <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay criptomonedas disponibles</p>
        </div>
    )

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Criptomonedas</h2>
                <span className="text-sm text-gray-500">{cryptos.length} monedas</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cryptos.map(crypto => (
                    <CryptoCard key={crypto.id} crypto={crypto} />
                ))}
            </div>
        </div>
    )
}

export default CryptoList;