# 为什么不同平台的 Delta 不一样？

Delta 表示标的价格小幅变化时，期权理论价格的变化敏感度。买入 Call 的 Delta 通常为正，买入 Put 通常为负；卖出后的符号相反。

## 数值不同不一定是谁算错了

平台可能采用不同口径：

- Spot Delta 或 Forward Delta；
- 是否对权利金进行调整；
- Bid、Ask、Mid 或模型价格作为输入；
- 不同的利率、股息和隐含波动率；
- 对 Put Delta 的符号显示方式不同。

看到“25 Delta 期权”时，应先统一到期日、Call 或 Put、Delta 口径和报价输入，再比较合约。不要把 Delta 当成到期获利概率的精确预测，它只是模型下的近似风险指标。

[查看小隐寺完整词条：期权 Delta 口径](https://xiaoyinsi.com/wiki/options/option-delta-conventions)
