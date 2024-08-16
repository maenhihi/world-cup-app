import Image from "next/image"

interface MatchProps {
    date: string;
    home_team: string;
    away_team: string;
    result: string;
}

export default function Matches({ date, home_team, away_team, result }: MatchProps) {
 
    return (
        <div className="matches__wrapper">
            <h5 className="black">
                {date}
            </h5>
            <div className="matches__image--wrapper">
            <Image src={'/flags/fifa-logo.svg'} alt="world cup logo"
            width={1000}
            height={55}/>
            </div>
            
            <div className="results">
                <h2 className="green">{home_team}</h2>
                <h4 className="results__result">{result}</h4>
                <h2 className="red">{away_team}</h2>
            </div>
            <br />
            </div>
    )
}