# 期权选行权价要怎么看 Skew？

Skew 反映不同执行价的隐含波动率差异。

选行权价时不能只看 Delta，还要看：

1. OTM Put 是否明显更贵。
2. OTM Call 是否被事件或炒作推高。
3. 价差策略两条腿的 IV 是否合理。
4. 卖出昂贵一侧是否承担更大尾部风险。
5. 买入便宜一侧是否只是因为概率很低。

Skew 高不等于一定该卖，可能说明市场正在给尾部风险定价。

实操上，把候选行权价的 IV、Delta、盈亏平衡点和最大损失放在一起比较，不要只选权利金最高的一档。

继续学习：[Skew 调整后的行权价选择](https://xiaoyinsi.com/wiki/options/skew-adjusted-strike-selection)
