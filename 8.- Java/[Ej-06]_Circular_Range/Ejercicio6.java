
public class Ejercicio6 {
	public static void main(String[] args) {
		byte b = (byte) (127 + 5);
		short s = (short) (32767 + 25);
		int i = (int) (2147482647 + 1000);
		long l = (long) (Math.pow(10, 20) + 2000);
		System.out.println(b);
		System.out.println(s);
		System.out.println(i);
		System.out.println(l);
	}
}
