import path from 'path';
import fs from 'fs/promises';
import Image from 'next/image';
import IndividualTeamMatch from '@/pages/components/individualTeamMatch';
import Individualplayers from '@/pages/components/individualplayers';
import Link from 'next/link';
import picture from '@/public/flags/circle-left.svg'
export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    const paths = data.teams.map((team: any) => ({
        params: { id: team.id.toString() }
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    const team = data.teams.find((team: any) => team.id.toString() === params.id);

    if (!team) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            team,
        },
    };
}


export default function teams({ team }: any) {
    console.log(team)
    const teamPlayers = team.players
    const recentMatches = team.recent_matches
    console.log(teamPlayers)
    return (
        
            <section id="TeamDetails">
                {/* <div className="container"> */}
                    <div className="row individual__team--row">
                        <div className="return__arrow--wrapper">
                            <Link href="/teams">
                                <Image
                                className='return__arrow'
                                    src={picture}
                                    alt='left arrow'
                                    width={40}
                                    height={40}
                                />
                            </Link>
                        </div>
                        <div className="individual__team--upper">
                            <div className="individual__team--upper-1">

                                <Image
                                    className='padding'
                                    src={`${team.flag}`}
                                    width={30}
                                    height={15} alt={''}
                                />
                                <h2><span>Here’s the lowdown on how Coach {team.coach}'s {team.name} has been going so far:</span></h2>

                            </div>

                            <div className="matches__individual--wrapper">
                                {recentMatches.map((array: { id: React.Key | null | undefined; date: string; opponent: string; result: string; }) => (
                                    <IndividualTeamMatch
                                        key={array.id}
                                        date={array.date}
                                        opponent={array.opponent}
                                        result={array.result}
                                    />
                                ))}
                            </div>

                            <h2>{team.history}</h2>
                            <h3>    Here's a spotlight on {team.name}'s brightest stars in this editions World Cup:     </h3>

                            {teamPlayers.map((array: { id: React.Key | null | undefined; name: string; position: string; age: number; club: string; }) => (
                                <Individualplayers
                                    key={array.id}
                                    name={array.name}
                                    position={array.position}
                                    age={array.age}
                                    club={array.club}
                                />
                            ))

                            }

                        </div>
                    </div>
            </section>
        
    );
}
