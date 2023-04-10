import { Configuration } from "../types/types.ts";

export const defaultConfig: Configuration = {
  enableChangeSplitting: true,
  changeCollateral: "5000000",
  changeMinUtxo: "100000000",
  changeNativeAssetChunkSize: 20,
};
