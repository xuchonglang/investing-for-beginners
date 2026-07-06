# Dealer Gamma Exposure 应该怎样看？

Dealer Gamma Exposure（GEX）试图估算做市商期权仓位的 Gamma 暴露，并推测其 Delta 对冲可能怎样影响标的买卖。

常见解释是：做市商正 Gamma 时可能上涨卖出、下跌买入，从而抑制波动；负 Gamma 时对冲方向可能放大走势。但这只是条件性推断。

## 使用边界

- 无法从公开未平仓量准确知道做市商是多头还是空头；
- 盘中开平仓和场外头寸不可见；
- 不同数据商的符号、假设和到期范围可能不同；
- 事件与流动性变化可压过模型效果。

GEX 适合辅助观察关键行权价和到期集中度，不应成为单独的方向交易信号。

[查看小隐寺完整词条：Dealer Gamma Exposure](https://xiaoyinsi.com/wiki/options/dealer-gamma-exposure)
