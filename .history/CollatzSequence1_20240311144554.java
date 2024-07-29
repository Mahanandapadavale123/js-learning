public class CollatzSequence {
    public static void main(String[] args) {
        int n = 22; // Input value
        printCollatzSequence(n);
    }

    public static void printCollatzSequence(int n) {
        while (true) {
            System.out.print(n + " ");
            if (n == 1)
                break;
            else if (n % 2 == 1)
                n = 3 * n + 1;
            else
                n = n / 2;
        }
    }
}

