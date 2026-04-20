const nameInput = document.querySelector(".nombre") as HTMLInputElement;
const btn = document.querySelector(".btn") as HTMLButtonElement;

btn.addEventListener("click", () => {
    const valor = nameInput.value.trim(); // Limpiamos espacios

    if (valor) {
        // Guardamos el string directamente
        localStorage.setItem("nombre", valor); 
        console.log(localStorage);
        
        console.log("Guardado con éxito:", localStorage.getItem("nombre"));
        
        // Opcional: Limpiar el input después de guardar
        nameInput.value = "";
    } else {
        console.warn("El campo está vacío");
    }
});