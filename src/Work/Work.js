import React from "react";
import "./Work.css";
import ob from "../Screenshot 2022-12-20 232320.png"
import so from "../Screenshot 2022-12-20 230047.png"
import co from "../Screenshot 2023-01-25 231813.png"
function Work() {
  return (
    <div className="section">
   <div class="columns">
     <div class="column is-half">
       &ensp;
       <body>
         <section class="section">
           <div class="container">
             <div class="heading">
               <h1 class="title">Education</h1>
               <h2>
                 <strong><b className="about">Bachelor's<br></br></b></strong>
                 <b className="about">
                    <strong>University of Colombo<br></br>School of Computing<br></br></strong>
                 </b><h1 className="about1">2022-present</h1><br></br>
               </h2>
               <button class="button is-dark">Full time<br></br></button><br></br>
               <br></br><h2>
                 <strong><b className="about">High School<br></br></b></strong>
                 <b className="about">
                    <strong>T/Zahira Collge<br></br></strong>
                 </b><h1 className="about1">2018-2022</h1><br></br>
               </h2>
               <button class="button is-dark">Full time<br></br></button><br></br>
             </div>
           </div>
         </section>
       </body>
     </div>
     <div class="column is-half">
     &ensp;
       <body>
         <section class="section">
           <div class="container">
             <div class="heading">
               <h1 class="title">Experience</h1>
               <h2>
                 <strong><b className="about">IEEE Student Branch of UCSC<br></br></b></strong>
                 <b className="about">
                    <strong>Program Team</strong>
                 </b>
               </h2><br></br>
               <button class="button is-dark">Volunteer<br></br></button><br></br>
               <br></br><h2>
                 <strong><b className="about">ISACA Student Group of UCSC<br></br></b></strong></h2><br></br>
               <button class="button is-dark">Volunteer<br></br></button><br></br>
               <br></br><h2>
                 <strong><b className="about">Pahasara UCSC Media Unit<br></br></b></strong></h2><br></br>
               <button class="button is-dark">Volunteer<br></br></button><br></br>
             </div>
           </div>
         </section>
       </body>
     </div>
   </div>
   <div class="columns">
     <div class="column is-half">
       &ensp;
       <body>
         <section class="section">
           <div class="container">
             <div class="heading">
               <h1 class="title">Project</h1>
               <h2>
                 <br></br><strong><b className="about">Open Badges<br></br></b></strong>
                 </h2>
                 <img src={ob}></img><br></br><br></br>&emsp;&emsp;&ensp;&emsp;&emsp;
                 <button class="button is-dark">Member</button>
             </div>
           </div>
         </section>
       </body>
     </div>
     <div class="column is-half">
     &ensp;
       <body>
         <section class="section">
           <div class="container">
             <div class="heading">
               <h1 class="title">Certifications</h1>
               <img src={so}></img><b className="about">c++</b><br></br>
               <b className="about1">Sololearn<br></br>Credential ID 24182996-1068</b><br></br>
                 <button class="button is-dark">Member</button><br></br><br></br><br></br>
                 <img src={co}></img><b className="about">Machine learning</b><br></br>
               <b className="about1">Coursera<br></br>Credential ID 24182996-1060</b><br></br>
                 <button class="button is-dark">Member</button><br></br>
             </div>
           </div>
         </section>
       </body>
     </div>
   </div>
   </div>
  );
}
export default Work;
