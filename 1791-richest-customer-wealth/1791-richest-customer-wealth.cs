public class Solution {
    public int MaximumWealth(int[][] accounts) {
        var res = accounts.Select(ac => ac.Sum());
        return res.Max();
    }
}