import React from "react";
import path from 'path';
import fs from 'fs/promises';
import Teamcard from "@/pages/components/teamcard"

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    const teams = Array.isArray(data.teams) ? data.teams : [];

    return {
        props: {
            teams
        }
    };
}

export default function Teams(teams: any) {

    let arr = Object.values(teams);
    let arr1: any = arr[0]
    console.log(arr1)
    return (
        <section id="teams">
            <div className="container">
                <div className="row teams--row">
                    {arr1.map((array: { id: React.Key | null | undefined; country: string; coach: string; history: string; flag:string; }) => (
                        <Teamcard
                            key={array.id}
                            country={array.country}
                            coach={array.coach}
                            history={array.history}
                            flag={array.flag}
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}