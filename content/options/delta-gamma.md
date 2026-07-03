# 期权 Delta 和 Gamma 是什么？

Delta 和 Gamma 是描述期权方向风险最常用的两个希腊字母。Delta 估算标的价格变化时，期权价格会变化多少；Gamma 描述 Delta 本身变化得有多快。

完整词条：[Delta / Gamma 通俗讲解](https://xiaoyinsi.com/wiki/options/delta-gamma)

## Delta：方向和敏感度

如果一张 Call 的 Delta 为 0.50，标的上涨 1 美元，在其他因素近似不变时，期权价格可能上涨约 0.50 美元。Call 的 Delta 通常在 0～1 之间，Put 的 Delta 通常在 -1～0 之间。

Delta 越接近 1，Call 的价格表现越像正股；越接近 0，对小幅价格变化越不敏感。

## Gamma：Delta 的变化速度

Gamma 衡量标的每变化 1 美元，Delta 大约改变多少。如果 Delta 是速度，Gamma 就像加速度。

平值、临近到期的期权通常 Gamma 较高，标的小幅移动就可能让仓位方向敞口快速变化。这也是短期期权弹性大、风险也集中的原因。

Delta 和 Gamma 都是局部估算，标的跳空、IV 变化和流动性不足会让实际结果偏离。

相关阅读：[0DTE 期权是什么？](0dte-options.md)

> 本文仅用于期权知识教育。
