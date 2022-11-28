import java.util.Objects;

public class Ejercicio21 {
    public static void main(String[] args) {
        javaOrNull("null");
        login("admin", 1234);
        System.out.println(randomNumberIsPar());
    }

    public static void javaOrNull(String s) {
        System.out.println((Objects.equals(s, "java"))?s:"null");
    }

    public static void login(String name, int password) {
        System.out.println(((Objects.equals(name, "admin")) && (password == 1234))?"Login True":"Login False");
    }

    public static boolean randomNumberIsPar() { return ((int) (Math.random() * 100) / 10) % 2 == 0; }
}
