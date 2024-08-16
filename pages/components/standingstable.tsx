import Image from "next/image";

interface MatchProps {
    team: string;
    played: number;
    wins: number;
    draws: number;
    losses: number;
}

export default function standingstable({ team, played, wins, draws, losses }: MatchProps) {
    return (
        <>
            <tbody>
                <tr>
                    <td>
                        <Image
                            src={`/flags/${team}.png`}
                            width={20}
                            height={12} alt={"team flag"} />   {team}
                    </td>
                    <td className="num">
                        {played}
                    </td>
                    <td className="num">
                        {wins}
                    </td>
                    <td className="num">
                        {draws}
                    </td>
                    <td className="num">
                        {losses}
                    </td>
                </tr>
            </tbody>
        </>
    )
}
