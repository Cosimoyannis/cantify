import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";
import { Helmet } from 'react-helmet-async';

 
export default function Home() {
  
  
  return (
    <>
      
      
      
    
      <h1 className="title">EasterEgg</h1>
      
      
      
      
      <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
  <div class="col">
    <div class="card h-100">
      <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/1564531_chart_business_graph_statistics_icon.png?v=1656783778212" class="card-img-top rounded mx-auto d-block w-50" alt=""></img>
      <div class="card-body ">
        <h5 class="card-title"><b id="mensa"></b></h5>
        <div class="d-flex justify-content-between">
          <p class="card-text">Treskow Allee 82 <br></br>13127 Berlin <br></br> Offen bis: 18 Uhr</p>
          <p class="card-text">Distance <br></br>700m<br></br> gut besucht!</p>
        </div>
      </div>
    </div>
  </div>
        
        
        
         <div class="col">
    <div class="card h-100">
      <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/1564531_chart_business_graph_statistics_icon.png?v=1656783778212" class="card-img-top rounded mx-auto d-block w-50" alt=""></img>
      <div class="card-body ">
        <h5 class="card-title"><b>HTW Mensa</b></h5>
        <div class="d-flex justify-content-between">
          <p class="card-text">Treskow Allee 82 <br></br>13127 Berlin <br></br> Offen bis: 18 Uhr</p>
          <p class="card-text">Distance <br></br>700m<br></br> gut besucht!</p>
        </div>
      </div>
    </div>
  </div>
        
        <div class="col">
    <div class="card h-100">
      <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/1564531_chart_business_graph_statistics_icon.png?v=1656783778212" class="card-img-top rounded mx-auto d-block w-50" alt=""></img>
      <div class="card-body ">
        <h5 class="card-title"><b>HTW Mensa</b></h5>
        <div class="d-flex justify-content-between">
          <p class="card-text">Treskow Allee 82 <br></br>13127 Berlin <br></br> Offen bis: 18 Uhr</p>
          <p class="card-text">Distance <br></br>700m<br></br> gut besucht!</p>
        </div>
      </div>
    </div>
  </div>
        
        <div class="col">
    <div class="card h-100">
      <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/1564531_chart_business_graph_statistics_icon.png?v=1656783778212" class="card-img-top rounded mx-auto d-block w-50" alt=""></img>
      <div class="card-body ">
        <h5 class="card-title"><b>HTW Mensa</b></h5>
        <div class="d-flex justify-content-between">
          <p class="card-text">Treskow Allee 82 <br></br>13127 Berlin <br></br> Offen bis: 18 Uhr</p>
          <p class="card-text">Distance <br></br>700m<br></br> gut besucht!</p>
        </div>
      </div>
    </div>
  </div>
        
         <div class="col mb-25">
    <div class="card h-100">
      <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/1564531_chart_business_graph_statistics_icon.png?v=1656783778212" class="card-img-top rounded mx-auto d-block w-50" alt=""></img>
      <div class="card-body ">
        <h5 class="card-title"><b>HTW Mensa</b></h5>
        <div class="d-flex justify-content-between">
          <p class="card-text">Treskow Allee 82 <br></br>13127 Berlin <br></br> Offen bis: 18 Uhr</p>
          <p class="card-text">Distance <br></br>700m<br></br> gut besucht!</p>
        </div>
      </div>
    </div>
  </div>
  
  
  
</div>
      
      
    
      
   
      
 

      
      
      
      
      
      
      
    
   
      
      
      
      
      
      
      
      
       <nav class="navbar bg-white fixed-top rounded-pill py-4 shadow">
        
  <div class="container d-flex justify-content-evenly">
    <a class="navbar-brand" href="/">
      <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/pngwing.com%20(4).png?v=1656781464561" alt="" width="40" height="40"></img>
    </a>
     <a class="navbar-brand" href="/about">
    </a>
     <a class="navbar-brand" href="/MensaSelectionPage">
    </a>
     <a class="navbar-brand" href="#">
      <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/bell_orange.png?v=1656865820884" alt="" width="24" height="24"></img>
    </a>
  </div>  
          
</nav>
      
      
      
      
      
      
      
      
      <nav class="navbar bg-white fixed-bottom rounded-pill py-4 shadow">
        
  <div class="container d-flex justify-content-evenly">
    <a class="navbar-brand" href="/">
      <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/home_orange.png?v=1656865821277" alt="" width="30" height="30"></img>
    </a>
     <a class="navbar-brand" href="/about">
      <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/heart_orange.png?v=1656865820935" alt="" width="24" height="24"></img>
    </a>
     <a class="navbar-brand" href="/MensaSelectionPage">
      <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/search_orange.png?v=1656865821143" alt="" width="30" height="30"></img>
    </a>
     <a class="navbar-brand" href="#">
      <img src="https://cdn.glitch.global/0c15c725-e764-4776-a32b-28fdb0e82a47/orders_orange.png?v=1656865821199" alt="" width="24" height="24"></img>
    </a>
  </div>  
          
</nav>
      
      
      
      
  
  
      
      
      
      
    </>
    
    
   
    
  
    
    
  );
    
    
    
  const mensa = document.getElementById("mensa");

  mensa.innerText = "loading";

  const result = fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => mensa.innerText = JSON.stringify(users[0].email, null, 2));
  
   
  
  
    
     };
  
 


  


