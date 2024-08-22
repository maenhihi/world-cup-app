import Image from "next/image";
import Link from "next/link";
interface MatchProps {
  id:number;
  country: string;
  flag: string;
}



export default function teamcard({ id, country, flag }: MatchProps) {
   
  return (
    <div className="teams__wrapper">
      <Link
      href={`/teams/${id}`}
      >
      
      
      <div className="singleTeam">
            <h1>{country}</h1>
          <div className="image--wrapper">
            <Image className="flag__image" src={flag} alt={`${country} flag`} width={100} height={60} />
          </div>
        </div>
      </Link>
    </div>
  );
}
