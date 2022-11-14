
public class Ejercicio15 {
	public static void main(String[] args) {
		esInpar(1);
		esInpar(2);
		binariColor();
	}
	
	public static void esInpar(int num) {
		int res = num%2;
		if (res == 0) { System.out.println(num + " Es par"); }
		else { System.out.println(num + " Es inpar"); }
	}
	
	public static void binariColor() {
		int rnd = (int) Math.floor(Math.random());
		if (rnd == 1) { System.out.println("Blanco"); }
		else { System.out.println("Negro"); }
	}
}
