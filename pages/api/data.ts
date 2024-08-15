import path from 'path';
import fs from 'fs/promises';
import data from '@/public/data/data.json'


export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');
  
  const jsonData = await fs.readFile(filePath, 'utf-8');
  
  const data = JSON.parse(jsonData);

  console.log("Fetched teams data:", data);

  return {
    props: {
      teams: data
    }
  }
  
}


