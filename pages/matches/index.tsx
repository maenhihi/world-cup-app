import React from "react";
import path from 'path';
import fs from 'fs/promises';
import Matches from "@/pages/components/matches";

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    const matches = Array.isArray(data.matches) ? data.matches : [];

    return {
        props: {
            matches
        }
    };
}


export default function Home(matches: any) {
    let arr = Object.values(matches);
    let arr1: any = arr[0]

    return (
        <>
            <section id="matches">
                <div className="container">
                    <div className="row individual__team--row">

                <h1 className="teams__header">
                Here are the latest results!!!  <div className="ball__emoji ">  ⚽️</div>
            </h1>

                    <div className="row teams--row">
                        {arr1.map((array: { id: React.Key | null | undefined; date: string; home_team: string; away_team: string; result: string; }) => (
                            <Matches
                                key={array.id}
                                date={array.date}
                                home_team={array.home_team}
                                away_team={array.away_team}
                                result={array.result}
                            />
                        ))}
                    </div>
                    </div>

                </div>
            </section>
        </>
    )
}