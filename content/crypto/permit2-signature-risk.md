# Permit2 签名有什么风险？

钱包没有弹出 Gas 付款，不代表没有风险。Permit 类签名可以让攻击者之后上链转走资产。

签名前逐项核对：

1. 链 ID 是否正确。
2. Permit2 合约地址是否可信。
3. Spender 是谁。
4. Token 合约地址是否正确。
5. 授权金额是否过大。
6. Deadline、Expiration 和 Nonce 是否合理。

撤销 DApp 连接不等于撤销 Token 授权或 Permit 权限。

高风险交互建议使用独立小钱包；签错后优先转移最容易被授权转走的资产，再撤销授权。

继续学习：[Permit2 签名风险](https://xiaoyinsi.com/wiki/crypto/permit2-signature-risk)
