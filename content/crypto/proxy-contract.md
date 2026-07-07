# Proxy Contract 为什么要检查？

Proxy Contract 是可升级合约常用结构。用户交互的是代理合约，逻辑可以指向不同实现合约。

好处是项目可以修复漏洞和升级功能；风险是管理员可能更改逻辑，甚至引入恶意实现。

检查重点：

1. 是否可升级。
2. 谁控制升级权限。
3. 是否有 Timelock。
4. 多签签名人是否可信。
5. 历史升级记录是否透明。

新手使用 DeFi 协议时，不要只看合约已审计。审计的是某个版本，如果合约可升级，权限管理同样重要。

继续学习：[Proxy Contract](https://xiaoyinsi.com/wiki/crypto/proxy-contract)
