# 期权组合 Dollar Delta 怎么算？

Dollar Delta 把期权 Delta 换算成标的每变动 1 美元时，组合大约赚亏多少美元。

基本理解：

`Dollar Delta = Delta × 合约乘数 × 合约张数`

如果一张 Call 的 Delta 是 0.55，乘数 100，那么标的上涨 1 美元，理论上约赚 55 美元。

组合管理时要：

1. 按标的分别汇总 Dollar Delta。
2. 高相关标的合并观察。
3. 同时看 Gamma，避免标的移动后 Delta 快速变化。
4. 不用 Delta 替代最大损失和压力测试。

净 Delta 接近 0 不等于无风险，因为还可能有 Gamma、Vega、Theta、跳空和流动性风险。

继续学习：[期权组合 Dollar Delta](https://xiaoyinsi.com/wiki/options/portfolio-dollar-delta)
