# Creational Patters (Patrones creacionales)

### 1. Singleton

**¿De que se trata singleton?**
En un patron que nos permite asegurarnos que no se pueda crear mas de una instancia de un objeto.

Con esto aseguramos un único punto global de acceso a la instancia.

Este también tiene elementos por los que podría ser conocido como un anti-patrón.

**¿A que problemáticas podría dar solución?**
Cuando queremos asegurar el acceso a un recurso compartido en diferentes partes de la app.

Suena similar a lo que hace una Biblioteca de Manejo de Estados (Como Vuex, Redux, o NgRx)

Cuando queremos que la modificación al recurso compartido se lleve a cabo en un solo punto de acceso.

Un ejemplo para ello seria crear un método en la clase, donde se pueda modificar el estado interno de ese único objeto.

**Solución:**
El patron sugiere hacer privado el constructor de la clase para evitar hacer uso del operador new().
Crear un método estático que actué como “constructor” y que tras bambalina llame al constructor privado, para crear un objeto que estará guardado en una variable estática que funcionara como caché.
