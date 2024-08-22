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
            <div className="row individual__team--row">


                <h5 className="black">
                    {/* {date} */}
                </h5>
                <div className="matches__image--wrapper">

                    {date}
                </div>

                <div className="results">
                    <div className="results__top">
                        <Image
                            className="jersey__image"
                            src={'flags/blue-jersey.svg'}
                            width={100}
                            height={100}
                            alt=".."
                        />
                        <h2 className="green">{home_team}</h2>

                    </div>
                    <div className="results__middle">
                        <h1 className="results__result">{result}</h1>
                    </div>
                    <div className="results__bottom">
                        <h2 className="red">{away_team}</h2>
                        <Image
                            src={'flags/red-jersey.svg'}
                            width={100}
                            height={100}
                            alt=".."
                        />

                    </div>
                </div>
                <br />
                <br />
            </div>
        </div>
    )
}