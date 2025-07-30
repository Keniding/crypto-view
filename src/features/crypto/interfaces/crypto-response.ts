import type {CryptoAsset} from "./crypto-asset.ts";

export interface CryptoResponse {
    timestamp: number;
    data: CryptoAsset[];
}