# Ejercicios Regex

Para realizar los ejercicios, no basaremos en el siguiente fichero: https://gist.github.com/DavidBernalGonzalez/c3514686f695f5a13b8ce4c0d0aa67c3

![Imagen fichero](IMG/Captura_1.PNG)

### **Ejercicio 1:** Basándote en el fichero original, añade un “)” inmediatamente después del primer número del resultado debe ser el siguiente: 

![Enunciado Ejercio 1](IMG/Enunciado_1.PNG)

**BUSQUEDA:** ^(?\<no\>\d+)(\s) 

**REEMPLAZO:** $1)

![Resultado 1](IMG/Resultado_1.PNG)

***

### **Ejercicio 2:** Basándote en el fichero original, haz que todos los elementos tengan un solo espacio entre palabra y palabra. Por tanto, es necesario quitar tabulaciones y doble espaciados. Además, también debes de seleccionar los espacios del final independientemente de si son tabulaciones o espacios. 

![Enunciado Ejercio 2](IMG/Enunciado_2.PNG)

**BUSQUEDA:** \s{1,}

**REEMPLAZO:** “ “

![Resultado 2](IMG/Resultado_2.PNG)

***

### **Ejercicio 3:** Basándote en el fichero original, sustituye todos los correos que tengan:
* ### **Subdominio:** @ lo que sea 
* ### **Y acaban en :** cl o ch
### Por ejemplo:

![Enunciado Ejercio 3](IMG/Enunciado_3_1.PNG)

### El resultado será el siguiente: 

![Enunciado Ejercio 3](IMG/Enunciado_3_2.PNG)

**BUSQUEDA:** (@)(\w+)(\\.cl|\\.ch) 

**REEMPLAZO:** $1gmail$3

![Resultado 3](IMG/Resultado_3.PNG)

***

### **Ejercicio 4:** Elimina todo lo que no sea un email: 

![Enunciado Ejercio 4](IMG/Enunciado_4_1.PNG)

### El resultado final debe de ser el siguiente: 

![Enunciado Ejercio 4](IMG/Enunciado_4_2.PNG)

**BUSQUEDA:** ([\\w.\\.-]+@[\\w.\\.-]+) 

**REEMPLAZO:** ;$1;

![Resultado 4](IMG/Resultado_4_1.PNG)

**BUSQUEDA:** (.\*; )(.\*)(;.\*) 

**REEMPLAZO:** $2

![Resultado 4](IMG/Resultado_4_2.PNG)