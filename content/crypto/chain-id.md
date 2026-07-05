# Chain ID 链 ID 是什么？

Chain ID 是区分不同区块链网络的标识，签名通常会包含它，以降低交易被拿到另一条链重放的风险。

完整词条：[Chain ID 是什么？](https://xiaoyinsi.com/wiki/crypto/chain-id)

钱包切换网络时，会同时改变 Chain ID、RPC、Gas 资产和可访问的合约状态。

同一个地址在不同 EVM 网络上可能都存在，但余额和 Token 合约互不相同。地址相同不代表资产已经跨链。

手动添加网络时应从官方文档核对 Chain ID、RPC 和区块浏览器，避免连接到错误或恶意网络。
