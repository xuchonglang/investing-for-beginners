# Gamma Scalping 是什么？

Gamma Scalping 是持有正 Gamma 期权仓位后，通过反复买卖标的进行 Delta 对冲，尝试从标的波动中获利。

基本逻辑：

- 标的上涨时，期权组合 Delta 增加，需要卖出标的对冲。
- 标的下跌时，Delta 减少，需要买入标的对冲。
- 如果实际波动足够大，低买高卖的对冲收益可能覆盖 Theta 成本。

它的难点在于交易成本、滑点、对冲频率和波动率判断。实际波动不够大时，Theta 会持续损耗。

新手可以把它当作理解 Gamma 和 Theta 的例子，而不是马上实盘。真正执行需要清楚记录每次对冲、组合 Delta、期权成本和净盈亏。

继续学习：[Gamma Scalping](https://xiaoyinsi.com/wiki/options/gamma-scalping)
