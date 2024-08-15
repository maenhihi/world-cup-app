import Image from "next/image";

interface MatchProps {
  country: string;
  history: string;
 coach: string;
  flag: string;
}

export default function teamcard({ country, history, coach, flag }: MatchProps) {
  return (
    <div className="team__card--wrapper">
      <div className="singleTeam">
        <div className="singleTeam--top">
          <div>
            <h1>Country: {country}</h1>
            <h2>Coach: {coach}</h2>
          </div>
          <div className="image--wrapper">
            <Image className="flag__image" src={flag} alt={`${country} flag`} width={100} height={60} />
          </div>
        </div>
        <p>History: {history}</p>
      </div>
    </div>
  );
}
