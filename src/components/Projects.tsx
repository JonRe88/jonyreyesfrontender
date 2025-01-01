
import './Projects.css';

export default function Projects() {
  return (
    <section className="py-24 px-4 bg-gray-900" id="projects">
      <div className="max-w-7xl mx-auto">
        <span className="text-white text-4xl md:text-5xl xl:text-6xl flex flex-column capitalize flex items-center justify-center mb-16" style={{ textShadow: '1px 1px 2px white, 0 0 1em blue, 0 0 0.2em blue' }}>
          Mis Proyectos
        </span>
        <div>
          <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            <div className="card bg-gray-800 p-10 relative">
              <div className="circle no-repeat-cover" style={{ backgroundImage: "url('/ProyectoEncriptador.png')" }}></div>
              <div className="relative lg:pr-52">
                <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Encriptador</h2>
                <p className="text-gray-400">Proyecto realizado para AluraLatam poniendo en practica Javascript</p>
                <a href="https://encriptador-unicode.vercel.app/" className="demo-button">Demo</a>
              </div>
            </div>
            <div className="card bg-gray-800 p-10 relative">
              <div className="circle" style={{ backgroundImage: "url('/ProyectoAluraGeek.png')" }}></div>
              <div className="relative lg:pl-48">
                <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">AluraGeek</h2>
                <p className="text-gray-400">Proyecto de una aplicación para listar, registrar y eliminar productos usando HTML, CSS y JavaScript.</p>
                <a href="https://jonre88.github.io/challenge-AluraGeek/" className="demo-button">Demo</a>
              </div>
            </div>
            <div className="card bg-gray-800 p-10 relative">
              <div className="circle" style={{ backgroundImage: "url('/ProyectoBios3.png')" }}></div>
              <div className="relative lg:pr-44">
                <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Bios3LAB</h2>
                <p className="text-gray-400">Pagina para la empresa Bios3LAB.</p>
                <a href="https://bio-s3-lab.vercel.app/" className="demo-button">Demo</a>
              </div>
            </div>
            <div className="card bg-gray-800 p-10 relative">
              <div className="circle" style={{ backgroundImage: "url('/ProyectoAluraFlix.png')" }}></div>
              <div className="relative lg:pl-48">
                <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">AluraFlix</h2>
                <p className="text-gray-400">Proyecto final para AluraLatam utilizando, React y Javascript.</p>
                <a href="https://alura-flix-challenge-7llf.vercel.app/" className="demo-button">Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}