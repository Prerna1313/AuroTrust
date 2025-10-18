import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

const config = new AptosConfig({ network: Network.TESTNET });
export const aptos = new Aptos(config);

export const MODULE_ADDRESS = "0x76bd20b4414932204367afe9d5bb2363ca260b2a8b559c43038a5e35b459e3dd";

export const EXPLORER_URL = "https://explorer.aptoslabs.com";
export const getTxUrl = (hash: string) => `${EXPLORER_URL}/txn/${hash}?network=testnet`;
export const getAccountUrl = (address: string) => `${EXPLORER_URL}/account/${address}?network=testnet`;
