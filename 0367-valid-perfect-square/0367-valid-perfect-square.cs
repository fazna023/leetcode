public class Solution {
    public bool IsPerfectSquare(int num) {
        double squareRoot = Math.Sqrt(num);
        return squareRoot == Math.Floor(squareRoot);
    }
}