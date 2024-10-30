import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Sender, SendMode } from '@ton/core';

export type BechYaConfig = {};

export function bechYaConfigToCell(config: BechYaConfig): Cell {
    return beginCell().endCell();
}

export class BechYa implements Contract {
    constructor(readonly address: Address, readonly init?: { code: Cell; data: Cell }) {}

    static createFromAddress(address: Address) {
        return new BechYa(address);
    }

    static createFromConfig(config: BechYaConfig, code: Cell, workchain = 0) {
        const data = bechYaConfigToCell(config);
        const init = { code, data };
        return new BechYa(contractAddress(workchain, init), init);
    }

    async sendDeploy(provider: ContractProvider, via: Sender, value: bigint) {
        await provider.internal(via, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell().endCell(),
        });
    }
}
