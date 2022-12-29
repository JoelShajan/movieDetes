const base="https://api.tvmaze.com";
export async function apiGet(action){
 
  const result=await fetch(`${base}${action}`).then(r=>r.json());
  return result;
}
