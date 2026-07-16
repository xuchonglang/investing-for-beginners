# 波动率期限结构 Roll Down 怎么理解？

波动率期限结构描述不同到期日的隐含波动率。

Roll Down 是随着时间流逝，持仓会沿着期限结构移动，期权估值可能因此变化。

观察时看：

1. 近月 IV 是否高于远月。
2. 远月 IV 是否包含长期事件。
3. 持有期间 IV 会移动到哪一段。
4. 日历价差是否依赖期限结构稳定。
5. 事件后整条曲线是否可能重定价。

不要只看当前 IV 高低。期权持有期间，期限结构变化会影响 Vega 和时间价值。

如果策略利润主要来自 Roll Down，就必须提前设定期限结构反向移动时的止损。

继续学习：[波动率期限结构 Roll Down](https://xiaoyinsi.com/wiki/options/volatility-term-structure-roll-down)
