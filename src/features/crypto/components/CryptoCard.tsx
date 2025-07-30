import type { CryptoAsset } from "../interfaces/crypto-asset.ts";

interface CryptoCardProps {
    crypto: CryptoAsset;
}

const CryptoCard = ({ crypto }: CryptoCardProps) => {
    const price = parseFloat(crypto.priceUsd);
    const change = parseFloat(crypto.changePercent24Hr);
    const marketCap = parseFloat(crypto.marketCapUsd);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 6
        }).format(value);
    };

    const formatMarketCap = (value: number) => {
        if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
        if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
        if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
        return formatCurrency(value);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                          {crypto.symbol.slice(0, 2)}
                      </span>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-900">
                            {crypto.name}
                        </h3>
                        <p className="text-sm text-gray-500 uppercase">
                            {crypto.symbol}
                        </p>
                    </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      #{crypto.rank}
                  </span>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Precio</span>
                    <span className="text-lg font-bold text-gray-900">
                      {formatCurrency(price)}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">24h</span>
                    <span className={`text-sm font-semibold ${
                        change >= 0
                            ? 'text-green-600'
                            : 'text-red-600'
                    }`}>
                      {change >= 0 ? '+' : ''}{change.toFixed(2)}%
                  </span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Market Cap</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {formatMarketCap(marketCap)}
                  </span>
                </div>

                {crypto.maxSupply && (
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Supply</span>
                        <span className="text-sm text-gray-700">
                          {parseFloat(crypto.supply).toLocaleString()} / {parseFloat(crypto.maxSupply).toLocaleString()}
                      </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CryptoCard;