public class Ejercicio20 {
    public static void main(String[] args) {
        ej1();
        ej2();
    }

    public static void ej1() {
        System.out.println("EJERCICIO 1");
        System.out.println(skipFor());
        System.out.println(skipWhile());
    }

    public static String skipFor() {
        StringBuilder frase = new StringBuilder("Iteraciones For: ");
        for (int i = 0; i < 10; i++) {
            frase.append(i).append(" ");
            if (i == 3) {break;}
        }
        return frase.toString().toString();
    }

    public static String skipWhile() {
        StringBuilder frase = new StringBuilder("Iteraciones For: ");
        int i = 0;
        while (i < 10) {
            frase.append(i).append(" ");
            if (i == 3) {break;}
            i++;
        }
        return frase.toString().toString();
    }

    public static void ej2() {
        System.out.println("------------------------------------");
        System.out.println("EJERCICIO 2");
        StringBuilder frase = new StringBuilder("Iteraciones For: ");
        for (int i = 0; i < 10; i++) { if (i != 5) { frase.append(i).append(" "); } }
        System.out.println(frase);
    }
}
