import React,{useState,useEffect}from "react";
import "./style.css";
//https://api.github.com/users/KrapaGoutam
export default function App({login}) {
  const [data, setData] = useState(null);
  const [loading, setLoading]=useState(false);
  const [error, setError]=useState(null);
      useEffect(() =>{
        if(!login) return;
        setLoading(true);

      fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(()=>setLoading(false))
      .catch(setError);
    }, [login] );

     if (loading) return<h1>Loading......</h1> ;
     if(error) return<pre>{JSON.stringify(error , null , 2)}</pre>;
     if(!data) return null;


  return(
    <div>
    <div>//{JSON.stringify(data)}//</div>
    <h1>{data.login}</h1>
    <img alt={data.login} src={data.avatar_url}/>
    </div>
  )


}
