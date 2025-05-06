public class Solution {
    public int SingleNumber(int[] nums) {
     return nums
            .GroupBy(x => x)
            .Where(g => g.Count() == 1)
            .Select(g => g.Key)
            .First(); 
}}
