
import {useState} from 'react';
function Country() {
  
    const [emps,setEmps]=useState([
              { country: 'World', population: 7693165599 },
              { country: 'Pakistan', population: 194125062 },
              { country: 'Nigeria', population: 186988000 },
              { country: 'Bangladesh', population: 161006790 },
              { country: 'Russian Federation', population: 146599183 },
              { country: 'Japan', population: 126960000 },
              { country: 'China', population: 1377422166 },
              { country: 'India', population: 1295210000 },
              { country: 'Indonesia', population: 258705000 },
              { country: 'United States of America', population: 323947000 },
              { country: 'Brazil', population: 206135893 },
              
    ])
    const strAscending = [...emps].sort((a, b) =>
    a.population < b.population ? 1 : -1,
  );
  // console.log(strAscending);
  
    return ( 
    <div className = "Country" >
      
       {strAscending.map( (country,index)=>
       
       ( 
          <div key={index} className="grid">
              <p>{country.country}</p>
              <p>{country.population}</p>

              
          </div>
       )
       )}
      

     </div>
    );
}

// export default App;


// import React from "react";
// const Country = () =>{
//     const tenHighestPopulation = [
//         { country: 'World', population: 7693165599 },
//         { country: 'China', population: 1377422166 },
//         { country: 'India', population: 1295210000 },
//         { country: 'United States of America', population: 323947000 },
//         { country: 'Indonesia', population: 258705000 },
//         { country: 'Brazil', population: 206135893 },
//         { country: 'Pakistan', population: 194125062 },
//         { country: 'Nigeria', population: 186988000 },
//         { country: 'Bangladesh', population: 161006790 },
//         { country: 'Russian Federation', population: 146599183 },
//         { country: 'Japan', population: 126960000 },
//       ]
//       const listItems = tenHighestPopulation;
      

//       return(
//         <div>
            
//    <ul>{listItems}</ul>

            
//         </div>
//       );
// }
export default Country;