# Covered Strangle 是什么？

Covered Strangle 通常是在持有股票的同时，卖出一个虚值 Call 和一个虚值 Put。它比 Covered Call 多收一份权利金，也多承担了下跌接股风险。

可以把它拆成两部分：

- 持股加卖 Call：上涨到执行价以上可能被卖出股票。
- 现金担保卖 Put：下跌到执行价以下可能再买入 100 股。

适用前提是你既愿意在高位卖出一部分持仓，也愿意在低位增加持仓。否则它会把“收租”变成被动加仓或被动卖飞。

检查重点：

1. 被指派后持股数量是否过大。
2. 两侧执行价是否对应真实买卖计划。
3. 权利金是否足以补偿事件风险。
4. 到期前是否有财报、除息或重大公告。
5. 下跌时是否有现金接股。

Covered Strangle 的核心不是预测震荡，而是预先接受两边被动成交的结果。

继续学习：[Covered Strangle](https://xiaoyinsi.com/wiki/options/covered-strangle)
