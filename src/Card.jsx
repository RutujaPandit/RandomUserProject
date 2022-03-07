import {useState} from 'react';

const Card = () => {
    const[name,changeName]=useState("Rutuja");
    const[img,setImage]=("https://randomuser.me/api/portraits/men/73.jpg");
    
        const handleChange = () =>{
                console.log("button clicked");
                fetch('https://randomuser.me/api/')
                .then(res => res.json())
                .then(data => changeName(data?.results?.[0].name.title+" "+data?.results?.[0].name.first+ " " +data?.results?.[0].name.last))
                
                // changeName(data?.results?.[0].name.first)
                // console.log(data?.results?.[0].name.first)
        }
        

    return (
        <>
            <div  className="card" style={{width: "25rem",marginLeft:"35%",border:"3px solid white"}}>
                <img id="card-i" src='./icon.png' className="card-image" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">Hello,My Name is</h6>
                    <h3 className="card-text">{name}</h3>
                    <button id="btn" onClick={handleChange}><i className="fas fa-redo"></i></button>
                    </div>
                    
            </div>


        </>
    );
}

export default Card;