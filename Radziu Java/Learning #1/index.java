import java.util.Scanner;

import javax.print.DocFlavor.STRING;

public class index {
    public static void main(String[] args) {
        Scanner ilo = new Scanner(System.in);
        int x = 10;

        System.out.println("Czy redstone = true?");
        String tf = ilo.nextLine();
        if (tf.equals("True")) {
            System.out.print("Działa");
        }else{
            while(x > 0) {
            System.out.print("Niedziała");
            x = x - 1;
            } 
        }

    }
}