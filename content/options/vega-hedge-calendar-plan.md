# 日历价差如何管理 Vega？

日历价差通常买远月、卖近月，因此常带有正 Vega。远月 IV 下跌可能伤害组合，近月 IV 变化也会影响短腿。

管理步骤：

1. 记录近月和远月 IV。
2. 看事件落在哪一腿。
3. 设置 IV 下跌后的止损条件。
4. 不要只看标的价格是否在区间内。

新手做 Calendar 时，方向没错也可能因 IV 变化亏钱。Vega 计划必须写在开仓前。

继续学习：[Vega 对冲日历价差计划](https://xiaoyinsi.com/wiki/options/vega-hedge-calendar-plan)
