public class Ejercicio18 {
    public static void main(String[] args) {
        System.out.println(ej(12, 21));
    }

    public static String ej(int filas, int columnas) {
        boolean isPar = columnas % 2 == 0;
        StringBuilder arbol = new StringBuilder();
        for (int i = 1; i <= filas; i++) {
            int espacios;
            if (i <= filas - 2) {
                espacios = (columnas - i * 2) / 2;
                arbol.append(printEstructura(espacios, columnas));
            } else {
                if (isPar) { espacios = (columnas - 4) / 2; }
                else { espacios = (columnas - 5) / 2; }
                arbol.append(printEstructura(espacios, columnas));
            }
        }
        return arbol.toString();
    }

    public static String printEstructura(int espacios, int columnas) {
        StringBuilder estructura = new StringBuilder();
        int tempE = 0, tempA = 0, cantidadDibujo = columnas - espacios * 2;
        for (int j = 1; j<= columnas; j++) {
            if (tempE != espacios) {
                estructura.append(" ");
                tempE ++;
            } else if (tempA != cantidadDibujo) {
                estructura.append("*");
                tempA ++;
            } else {
                tempE = 0; }
        }
        estructura.append("\n");
        return estructura.toString();
    }
}
