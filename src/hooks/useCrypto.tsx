import {useCallback, useEffect, useMemo, useState} from "react";
import type {CryptoResponse} from "../features/crypto/interfaces/crypto-response.ts";
import axios from "axios";

const useCrypto = () => {
    const [cryptos, setCryptos] = useState<CryptoResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Memorizar valores que no cambian
    const apiConfig = useMemo(() => {
        const apiUrl = import.meta.env.VITE_API_URL;
        const version = import.meta.env.VITE_VERSION;
        const endpoint = import.meta.env.VITE_ENDPOINT_ASSETS;
        const token = import.meta.env.VITE_TOKEN;

        return {
            url: `${apiUrl}/${version}/${endpoint}`,
            auth: {
                Authorization: `Bearer ${token}`
            }
        };
    }, []); // Las variables de entorno no cambian durante la ejecución

    const getCrypto = useCallback(async () => { // callback para que se renderice cuando memo cambie
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get<CryptoResponse>(apiConfig.url, {headers: apiConfig.auth});

            setCryptos(response.data);

        } catch (e) {
            if (axios.isAxiosError(e)) {
                const errorMessage = e.response?.data?.message ?? e.message ?? "Error de API";
                setError(`Error ${e.response?.status}: ${errorMessage}`);
            } else {
                const errorMessage = e instanceof Error ? e.message : "Unknown error";
                setError(errorMessage);
            }
            console.error('Fetch error:', e);
        } finally {
            setLoading(false);
        }
    }, [apiConfig.url, apiConfig.auth]); // Dependencias de la función

    useEffect(() => {
        void getCrypto();
    }, [getCrypto]); // getCrypto como dependencia

    return {
        cryptos: cryptos?.data ?? [],
        loading,
        error,
        refresh: getCrypto
    }
}

export default useCrypto;