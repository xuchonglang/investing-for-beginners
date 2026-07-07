# State Root 是什么？

State Root 是区块链状态的哈希摘要，用来代表某个区块后的完整系统状态。只要状态中任何账户、余额或合约数据变化，根哈希就会变化。

它的意义：

- 节点可以验证状态一致性；
- 轻客户端和证明系统可以使用状态证明；
- Rollup 可以提交状态根；
- 数据篡改会被哈希结构发现。

新手可以把 State Root 理解为整个链状态的“指纹”。

继续学习：[State Root](https://xiaoyinsi.com/wiki/crypto/state-root)
