import BN from "bn.js";
import { Web3SideChainClient } from "../utils";
import { ExitUtil } from "../pos";

export class BridgeClient<T> {

    protected client: Web3SideChainClient<T>;

    constructor(config: T) {
        this.client = new Web3SideChainClient(config as any);
    }

    exitUtil: ExitUtil;

    /**
     * check whether a txHash is checkPointed 
     *
     * @param {string} txHash
     * @returns
     * @memberof BridgeClient
     */
    isCheckPointed(txHash: string) {
        return this.exitUtil.isCheckPointed(
            txHash
        );
    }

    isDeposited(depositTxHash: string) {
        const client = this.client;
        return client.getABI(
            "StateReceiver",
            "genesis",
        ).then(abi => {
            const contract = client.child.getContract(
                client.abiManager.getConfig("Matic.GenesisContracts.StateReceiver"),
                abi
            );
            return Promise.all([
                client.parent.getTransactionReceipt(depositTxHash),
                contract.method("lastStateId").read<string>()
            ]);
        }).then(result => {
            const [receipt, lastStateId] = result;
            const eventSignature = `0x103fed9db65eac19c4d870f49ab7520fe03b99f1838e5996caf47e9e43308392`;
            const targetLog = receipt.logs.find(q => q.topics[0] === eventSignature);
            if (!targetLog) {
                throw new Error("StateSynced event not found");
            }
            const rootStateId = client.child.decodeParameters(targetLog.topics[1], ['uint256'])[0];
            const rootStateIdBN = BN.isBN(rootStateId) ? rootStateId : new BN(rootStateId);
            return new BN(lastStateId).gte(
                rootStateIdBN
            );
        });
    }

}