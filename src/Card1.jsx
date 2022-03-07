import {useState,useEffect} from 'react';
import './Card1.css';
const Card1 = () => {
    const[user,setUser]=useState([]);
    
        
        const fetchData = (name) =>{
            console.log(`${name}`);
            fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => {
                let Rutuja = data.results;
                setUser(Rutuja)
                
            })    
        }
    
        useEffect(() =>{
            fetchData();
        },[])
    
       
        return (
        <>
        <h2 style={{color:'white',marginLeft:"33%",marginTop:"15%",fontSize:"50px"}}>Random User Generator</h2>
        <div id="c-div">
        <div className="clearfix" >
        <div className="row">
          {user.map(data => (
            <div className="col-md-4" key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h6>Hello,My name is</h6>
                  <h4 className="card-title">
                    {data.name.first +
                      " " +
                      data.name.last}
                  </h4>
                  <button id="btn" onClick={()=>{fetchData('helloooo')}} ><i className="fas fa-redo"></i></button>
                 </div>
              </div>
            </div>
          ))}
        </div>
    
      </div>
      </div>
    </>
    );
}

export default Card1;