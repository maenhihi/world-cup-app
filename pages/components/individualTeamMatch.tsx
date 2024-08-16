import Image from "next/image"

interface MatchProps {
    date: string;
    opponent: string;

    result: string;
}

export default function individualTeamMatch({ date, opponent, result }: MatchProps) {

    return (
        <div className="matches__individual--wrapper">
            <div className="matches__individual">
                <h4 className="black">
                    {date}
                </h4>
                <div className="matches__image--wrapper">
                   
                </div>
                <div className="results">
                    <h1 className="results__result results__result--ind black">{result} against {opponent}</h1>

                </div>
                <br />
            </div>
        </div>

    )
}