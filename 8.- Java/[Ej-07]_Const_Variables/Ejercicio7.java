
public class Ejercicio7 {
	public static void main(String[] args) {
		final byte b = (byte) (127 + 5);
		final short s = (short) (32767 + 25);
		final int i = (int) (2147482647 + 1000);
		final long l = (long) (Math.pow(10, 20) + 2000);
		System.out.println(b);
		System.out.println(s);
		System.out.println(i);
		System.out.println(l);
	}
}
