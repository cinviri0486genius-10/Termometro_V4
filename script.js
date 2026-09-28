// Diccionario con los datos socioemocionales para cada nivel del termómetro
const estadosEmocionales = {
    1: {
        nombre: "Aburrido / Sin Energía",
        emoji: "🥱",
        color: "#94a3b8",
        desc: "Tu procesador interno va lento y te cuesta concentrarte en el mapa.",
        tip: "¡Estira tus brazos y toma un poco de agua fresca! Vamos a activar tu energía con un reto de código divertido."
    },
    2: {
        nombre: "Triste / Cansado",
        emoji: "😔",
        color: "#3b82f6",
        desc: "Tienes la batería baja y es normal que tu código se sienta un poco pesado hoy.",
        tip: "No te presiones. Hoy puedes avanzar a tu propio ritmo. Si necesitas ayuda con un bug, avísame de inmediato."
    },
    3: {
        nombre: "Calmo / Enfocado",
        emoji: "🙂",
        color: "#22c55e",
        desc: "¡Tu sistema está funcionando al 100%! Es un momento excelente para resolver bugs o crear un nuevo juego.",
        tip: "¡Comparte tu buena energía! Si terminas rápido tus misiones, puedes guiar a un compañero que esté atascado."
    },
    4: {
        nombre: "Frustrado / Preocupado",
        emoji: "😡",
        color: "#f97316",
        desc: "Hay demasiadas pestañas abiertas en tu mente y te sientes un poco abrumado.",
        tip: "Si un reto de código no sale a la primera, respira profundo. En la programación, equivocarse es la única forma de aprender."
    },
    5: {
        nombre: "Enojado / Muy Ansioso",
        emoji: "💥",
        color: "#ef4444",
        desc: "¡Alerta de sobrecalentamiento! Tu servidor está a punto de colapsar.",
        tip: "Suelta el ratón (mouse) por un momento. Cierra los ojos, respira aire 3 veces de forma lenta y recuerda que aquí estamos para divertirnos."
    }
};

function cambiarEmocion(nivel) {
    const mercurio = document.getElementById("mercurio");
    const bulbo = document.querySelector(".bulbo");
    const emojiDisplay = document.getElementById("emoji-display");
    const estadoNombre = document.getElementById("estado-nombre");
    const estadoDesc = document.getElementById("estado-descripcion");
    const estadoTip = document.getElementById("estado-estrategia");

    const info = estadosEmocionales[nivel];

    // 1. Quitar todas las clases previas de nivel del mercurio
    mercurio.className = "";
    // 2. Aplicar la nueva clase para activar la animación de subida/bajada
    mercurio.classList.add(`mercurio-nivel-${nivel}`);

    // 3. Cambiar el color del bulbo inferior para que haga juego
    bulbo.style.backgroundColor = info.color;

    // 4. Actualizar textos en la pantalla con efectos agradables
    emojiDisplay.innerText = info.emoji;
    estadoNombre.innerText = info.nombre;
    estadoNombre.style.color = info.color;
    estadoDesc.innerText = info.desc;
    estadoTip.innerText = info.tip;
}
