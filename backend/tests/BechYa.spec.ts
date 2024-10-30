import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { Cell, toNano } from '@ton/core';
import { BechYa } from '../wrappers/BechYa';
import '@ton/test-utils';
import { compile } from '@ton/blueprint';

describe('BechYa', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('BechYa');
    });

    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let bechYa: SandboxContract<BechYa>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        bechYa = blockchain.openContract(BechYa.createFromConfig({}, code));

        deployer = await blockchain.treasury('deployer');

        const deployResult = await bechYa.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: bechYa.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and bechYa are ready to use
    });
});
