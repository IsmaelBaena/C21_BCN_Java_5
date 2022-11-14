public class Ejercicio11 {
	static int numero = 0;
	
	public static void main(String[] args) {
		incrementar();
		incrementar();
		incrementar();
		System.out.println("Se ha incrementado el valor de numero: " + numero);
		decrementar();
		decrementar();
		decrementar();
		System.out.println("Se ha decrementado el valor de numero: " + numero);
	}
	
	public static void incrementar() { numero++; }
	public static void decrementar() { numero--; }
}
