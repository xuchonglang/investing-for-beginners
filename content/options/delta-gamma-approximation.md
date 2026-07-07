# Delta-Gamma 近似有什么用？

Delta-Gamma 近似用 Delta 和 Gamma 估算标的价格变化对期权组合的影响。它比只看 Delta 更能反映非线性。

简单理解：

- Delta 估算一阶变化；
- Gamma 修正价格变化后 Delta 改变的影响。

适用场景包括快速压力测试、估算小幅价格变化下的组合盈亏、理解为什么期权不是线性资产。

局限是它没有完整考虑 IV、时间、跳空和大幅价格变化。

继续学习：[Delta-Gamma 近似](https://xiaoyinsi.com/wiki/options/delta-gamma-approximation)
