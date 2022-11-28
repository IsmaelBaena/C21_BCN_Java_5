public class Ejercicio17 {
    private static int num1 = 9, num2 = 0;
    public static void main(String[] args) {
        ej1();
        System.out.println(ej2());
    }

    public static void ej1() {
        String frase = "ERROR: Numero del 1 al 10";
        switch (num1) {
            case 1:
                frase = "1";
                break;
            case 2:
                frase = "2";
                break;
            case 3:
                frase = "3";
                break;
            case 4:
                frase = "4";
                break;
            case 5:
                frase = "5";
                break;
            case 6:
                frase = "6";
                break;
            case 7:
                frase = "7";
                break;
            case 8:
                frase = "8";
                break;
            case 9:
                frase = "9";
                break;
        }
        System.out.println(frase);
    }

    public static String ej2() {
        return (num2 > 0)?"Es positivo":(num2<0)?"Es Negativo":"Es Cero";
    }
}
