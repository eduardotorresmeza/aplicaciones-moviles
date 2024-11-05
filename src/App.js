
import './App.css';

function App() {
  return (
    <div className="app-container">
    <header>
      <h1> Aplicaciones Móviles</h1>
    </header>
    <main>
      <section class="content">
        <h2>Bienvenido</h2>
        <p>Las aplicaciones móviles son programas o software diseñados para ejecutarse en dispositivos móviles como teléfonos inteligentes y tabletas. Estas aplicaciones permiten a los usuarios realizar una amplia variedad de tareas, como navegar por redes sociales, jugar, enviar mensajes, gestionar finanzas, realizar compras y mucho más.</p>
      </section>
      <section class="buttons">
        <button class="btn primary">Optimización para pantallas pequeñas: Su diseño y funcionalidad están adaptados a las dimensiones de las pantallas móviles, con interfaces intuitivas y fáciles de navegar.</button>
        <button class="btn secondary">Interactividad: Muchas aplicaciones móviles son interactivas, con gestos táctiles como deslizar, tocar y pellizcar, lo que mejora la experiencia del usuario.</button>
        <button class="btn primary">Funcionalidad offline y online: Algunas aplicaciones pueden funcionar sin conexión a internet (offline), mientras que otras necesitan conexión para acceder a sus funciones.</button>
      </section>
    </main>
    <footer>
      <p>&copy; 2024 Mi App Móvil</p>
    </footer>
  </div>
  );
}

export default App;
