# Nonce 在链上交易中有什么用？

Nonce 是账户交易序号，用来保证同一账户的交易按顺序执行，并防止重复交易。

常见问题：

- 某笔低 Nonce 交易卡住，后续交易也可能排队；
- 加速或取消交易通常要使用相同 Nonce；
- 手动设置 Nonce 错误会导致交易失败或覆盖。

新手遇到钱包交易卡住时，不要连续乱发交易。先查看当前 Nonce、Gas 设置和交易状态，再决定加速或取消。

继续学习：[Nonce](https://xiaoyinsi.com/wiki/crypto/nonce-crypto)
