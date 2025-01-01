
import './SectionComponent.css';

const SectionComponent = () => {
  return (
    <section className="w-full relative select-none tall:py-36 py-48 section-container flex flex-col">
      <p
        className="ui-left opacity-20 text-5xl md:text-7xl font-bold whitespace-nowrap scrolling-text"  style={{textShadow: '1px 1px 2px white, 0 0 1em blue, 0 0 0.2em blue'}}
      >
        User Interface Design User Experience Design User Interface Design User
        Experience Design User Interface Design User Experience Design User
        Interface Design User Experience Design User Interface Design User
        Experience Design
      </p>
      <h1
        className="text-white mt-6 md:mt-8 font-medium text-4xl md:text-5xl text-center will-change-opacity"
        style={{ opacity: 0.75 }} 
      >
        Interesado en{' '}
        <span className="text-strong font-bold" style={{textShadow: '1px 1px 2px white, 0 0 1em blue, 0 0 0.2em blue'}}>Colaborar?</span>
      </h1>
      <p
        className="mt-6 md:mt-8 ui-right opacity-20 text-5xl md:text-7xl font-bold whitespace-nowrap scrolling-text reverse"  style={{textShadow: '1px 1px 2px white, 0 0 1em blue, 0 0 0.2em blue'}}
      >
        Frontend Development Motion Graphics Frontend Development Motion
        Graphics Frontend Development Motion Graphics Frontend Development
        Motion Graphics Frontend Development Motion Graphics
      </p>
    </section>
  );
};

export default SectionComponent;