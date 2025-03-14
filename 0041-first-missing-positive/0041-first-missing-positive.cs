public class Solution {
    public int FirstMissingPositive(int[] nums) {
        int x =1;
        Array.Sort(nums);

        for(int i =0 ; i<nums.Length;i++){
            if (nums[i] == x){
                x++;
            }
        }

return x;
    }
}