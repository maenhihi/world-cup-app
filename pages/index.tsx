import Image from "next/image";

export default function Home() {
  return (
    <section id="home">
      <div className="container home__container">
        <div className="row home__row">
          <div id="animation">

          <h1>
        <span>F</span>
        <span>I</span>
        <span>F</span>
        <span>A</span>
        <span></span>
        <span>W</span>
        <span>O</span>
        <span>R</span>
        <span>L</span>
        <span>D</span>
        <span></span>
        <span>C</span>
        <span>U</span>
        <span>P</span>
        <span>!</span>
        <span>!</span>
        <span>!</span>
          </h1>
          </div>
          <div className="logo__wrapper">
          <Image
className="logo1"
src={'/flags/leomessi.jpeg'}
height={100}
width={100}
alt=".olo"
/>
<Image
className="logo2"
src={'/flags/soccer-player.png'}
height={100}
width={100}
alt=".olo"
/>
          </div>

        </div>
      </div>
    </section>
      
    
  );
}
