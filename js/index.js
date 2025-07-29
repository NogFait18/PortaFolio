const proyectos = [
    {
        nombre: "Gestor de Empleados",
        descripcion: "Es una web simple de CRUD (Crear, Leer, Actualizar, Eliminar), permite gestionar una lista de usuarios con nombre, apellido y edad.",
        tecnologias: ["./images/html.png", "./images/css.png","./images/js.png"],
        imagenes: ["./images/cap.png", "./images/ej.png"],
        link: "https://java-script-crud-gray.vercel.app/index.html"
    },
    {
        nombre: "Calculadora",
        descripcion: "Calculadora básica con operaciones matemáticas en JavaScript.",
        tecnologias: "Hecha con HTML, CSS y JavaScript",
        imagenes: ["./images/calculadora.png"],
        link: "https://mi-calculadora.vercel.app/"
    },
    {
        nombre: "Blog Personal",
        descripcion: "Un blog estático creado con HTML y CSS.",
        tecnologias: "Hecha con HTML, CSS y JavaScript",
        imagenes: ["./images/blog.png"],
        link: "https://mi-blog.vercel.app/"
    }
];
function mostrarProyecto(indice){
    const proyecto = proyectos[indice]

    const imagenesTecnologias = proyecto.tecnologias.map(img => 
        `<img src="${img}" alt="Imagen del proyecto" style="width:30px;" />`
    ).join("");
    
    const imagenes = proyecto.imagenes.map(img => 
        `<img src="${img}" alt="Imagen del proyecto" style="width:100%;border-radius:10px;margin-top:10px;" />`
    ).join("");

    Swal.fire({
        title: proyecto.nombre,
        html: `
            <p>${proyecto.descripcion}</p>
            <br/><br/>
            <p>Tecnologias:</p>
            ${imagenesTecnologias}
            ${imagenes}
            <br/><br/>
            <a href="${proyecto.link}" target="_blank" style="display:inline-block;padding:10px 20px;background:#3ed3cd;color:#fff;border-radius:5px;text-decoration:none;">Ir al proyecto</a>
        `,
        confirmButtonText: "Cerrar",
        confirmButtonColor: "#26827e",
        width: 500,
        padding: '2em',
        background: '#ffff',
        backdrop: `
        rgba(0, 0, 0, 0.4)
        left top
        no-repeat
        blur(5px)
    `
    });
}