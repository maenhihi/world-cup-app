import React from "react";
import path from 'path';
import fs from 'fs/promises';
import Teamcard from "../components/teamcard";


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
    return (
        <section id="teams">
            <div className="container">
              
             <h1 className="teams__header">
                Select a team from below!!! <div className="emoji__wrapper">👇</div>
            </h1>
                <div className="row teams--row">
               
                
                    {arr1.map((array: { id: number; country: string;  flag:string; }) => (
                        
                        <Teamcard
                            key={array.id}
                            id={array.id}
                          country={array.country}
                            flag={array.flag}  
                                          
                        />
                      
                    ))}
                     
                </div>
            </div>

        </section>
    )
}