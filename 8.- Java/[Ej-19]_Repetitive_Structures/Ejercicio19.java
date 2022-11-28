public class Ejercicio19 {
    public static void main(String[] args) {
        ej1(3);
        ej2();
        ej3(3);
        ej4();
    }

    public static void ej1(int num) {
        System.out.println("------------------------------------");
        System.out.println("EJERCICIO 1");
        if (num % 2 == 0) { System.out.println(num + " es par"); }
        else { System.out.println(num + " no es par"); }
    }

    public static void ej2() {
        System.out.println("------------------------------------");
        System.out.println("EJERCICIO 2");
        int[] array = new int[30];
        for (int i = 0; i < array.length; i++) { array[i] = i; }
        System.out.println("For:\n\t"+ divisiblePor3For(array));
        System.out.println("While:\n\t"+ divisiblePor3While(array));
    }

    public static String divisiblePor3For(int[] array) {
        StringBuilder frase = new StringBuilder("Numeros divisibles por 3: {");
        for (int i = 0; i < array.length; i++) {
            if (i%3 == 0) {
                frase.append(i).append(", ");
            }
        }
        frase.append("}");
        return frase.toString();
    }

    public static String divisiblePor3While(int[] array) {
        StringBuilder frase = new StringBuilder("Numeros divisibles por 3: {");
        int i = 0;
        while (i < array.length) {
            if (i%3 == 0) {
                frase.append(i).append(", ");
            }
            i++;
        }
        frase.append("}");
        return frase.toString();
    }

    public static void ej3(int num) {
        System.out.println("------------------------------------");
        System.out.println("Ejercicio 3");
        System.out.println("For\n\t" + holaFor(num));
        System.out.println("While\n\t" + holaWhile(num));
        System.out.println("Do While\n\t" + holaDoWhile(num));
    }

    public static String holaFor(int num) {
        StringBuilder frase = new StringBuilder("Hola!");
        for (int i = 0; i < num; i++) { frase.append(", Hola!"); }
        return frase.toString();
    }

    public static String holaWhile(int num) {
        StringBuilder frase = new StringBuilder("Hola!");
        int i = 0;
        while (i < num) {
            frase.append(", Hola!");
            i++;
        }
        return frase.toString();
    }

    public static String holaDoWhile(int num) {
        StringBuilder frase = new StringBuilder();
        int i = 0;
        frase.append("Hola!");
        do {
            frase.append(", Hola!");
            i++;
        } while (i < num);
        return frase.toString();
    }

    public static void ej4() {
        System.out.println("------------------------------------");
        System.out.println("Ejercicio 4");
        char[] abcedario = new char[26], abcedarioReverse = new char[26];
        int ascii = 65;
        StringBuilder frase = new StringBuilder();
        for (int i = 0; i < abcedario.length; i++) {
            abcedario[i] = (char) ascii;
            abcedarioReverse[i] = ' ';
            ascii ++;
        }
        for (int i = abcedario.length - 1; i >= 0 ; i--) {
            System.out.println(showArrayReverse(abcedario));
            abcedarioReverse[abcedario.length -1 - i] = abcedario[i];
            abcedario[i] = ' ';
            frase.append(showArrayReverse(abcedarioReverse)).append("\n");
        }
        System.out.println(frase);
    }

    public static String showArrayReverse(char[] array) {
        StringBuilder frase = new StringBuilder();
        for (int i = array.length - 1; i >= 0 ; i--) {
            if (array[i] != ' ') {
                frase.append(array[i]).append(" ");
            }
        }
        return frase.toString();
    }
}
