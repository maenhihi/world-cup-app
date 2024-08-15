import Image from "next/image"

export default function matches({ date, home_team, away_team, result }) {
    return (
        <div className="matches__wrapper">
            <h1 className="black">
                {date}
            </h1>
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