import Image from "next/image";

export default function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="row">
          <h1 className="home__text">Where Every Kick Counts: Your Ultimate FIFA Hub!</h1>
        <Image
        className="landing__image"
            src={'/flags/landingImage-2.png'} alt={""}   
            width={1100}   
            height={650}
              />
        </div>
      </div>
    </section>
      
    
  );
}
