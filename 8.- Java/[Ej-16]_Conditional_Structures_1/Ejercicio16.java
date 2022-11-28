
public class Ejercicio16 {
	public static void main(String[] args) {
		ej1();
	}
	
	public static void ej1() {
		generateColorUnidireccional();
		generateColorBidireccional();
		generateColorTernario();
	}
	
	public static String generateColorUnidireccional() {
		int rnd = (int) Math.round(Math.random());
		if (rnd == 1) { return "Rojo"; }
		if (rnd == 0) { return "Azul"; }
		return null;
	}
	
	public static String generateColorBidireccional() {
		int rnd = (int) Math.round(Math.random());
		if (rnd == 1) { return "Rojo"; }
		else { return "Azul"; }
	}
	
	public static String generateColorTernario() {
		int rnd = (int) Math.round(Math.random());
		return rnd==1?"Rojo":"Azul";
	}
	
	public static void ej2() {
		generateTemperaturaUnidireccional(26.5);
		generateTemperaturaBidireccional(13);
	}
	
	public static void generateTemperaturaUnidireccional(double numT) {
		String clima = "", tipo = "";
		if (numT < 10) {
			clima = "Clima Frio";
			if (numT < 5) { tipo = "Polar"; }
			if (numT > 5) { tipo = "Alta Montana"; }
		}
		if (numT >= 10 && numT < 20) {
			clima = "Clima Templado";
			if (numT < 13.5) { tipo = "Oceanico"; }
			if (numT >= 13.5 && numT < 16.5) { tipo = "Mediterraneo"; }
			if (numT >= 16.5) { tipo = "Continental"; }
		}
		if (numT <= 20) {
			clima = "Clima calido";
			if (numT < 23.5) { tipo = "Ecuatorial"; }
			if (numT >= 23.5 && numT < 26.5) { tipo = "Tropical"; }
			if (numT >= 26.5) { tipo = "Desertico"; }
		}
		System.out.println(clima + "\n" + tipo);
	}
	
	public static void generateTemperaturaBidireccional(double numT) {
		String clima, tipo;
		if (numT < 10) {
			clima = "Clima Frio";
			if (numT < 5) { tipo = "Polar"; }
			else { tipo = "Alta Montana"; }
		} else if (numT < 20) {
			clima = "Clima Templado";
			if (numT < 13.5) { tipo = "Oceanico"; }
			else if(numT < 16.5) { tipo = "Mediterraneo"; }
			else { tipo = "Continental"; }
		} else {
			clima = "Clima calido";
			if (numT < 23.5) { tipo = "Ecuatorial"; }
			else if(numT < 26.5) { tipo = "Tropical"; }
			else { tipo = "Desertico"; }
		}
		System.out.println(clima + "\n" + tipo);
	}
	
}