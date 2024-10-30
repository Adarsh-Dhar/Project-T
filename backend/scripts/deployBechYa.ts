import { toNano } from '@ton/core';
import { BechYa } from '../wrappers/BechYa';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const bechYa = provider.open(BechYa.createFromConfig({}, await compile('BechYa')));

    await bechYa.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(bechYa.address);

    // run methods on `bechYa`
}
