interface MatchProps{
    name: string;
    position: string;
    age: number;
    club: string;
}



export default function individualplayers({name, position, age, club}: MatchProps) {

    return <>
    <div className="individual__player--wrapper">
    <h2>Name: {name}
        </h2>
        <h3>Position: {position}</h3>
        <h3>Age: {age}</h3>
        <h3>Club: {club}</h3>
    </div>
      
    </>
}