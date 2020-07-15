import React from "react";
import pic from "../image/pic1.jpg";
import { Player } from 'video-react';


class ViewMore extends React.Component {
  render() {
    return (
      <div className="first">
        <div className="content-o">
          <div className ="videoWrapper">
          <div className ="one-videoWrapper">
            <button style= {{
             borderRadius:"8px", backgroundColor:"rgb(196, 196, 247)", margin:"1rem", padding:"4px"
            }}>PRODEGREE</button>
<p style ={{fontWeight:"bold",  color:"black", fontSize:"30px"}}> 
  Data Analysis ProDegree Monitored By XYZ</p>
<p>
  <button className="button-left">ENQUIRE NOW</button>
  <button className ="button-right">DOWNLOAD BROCHURE</button>
</p>
<p style ={{color:"black",marginTop:"2rem"}}>Choose from 100,000 online video courses with new additions published every month</p>
          </div>
            <div style ={{"width":"420px" , "height":"360px", float:"right", marginRight:"3rem",
             marginTop:"2rem",boxShadow: "rgb(204, 204, 204) 3px"}}>
         <Player >
      <source 
      src="https://ak.picdn.net/shutterstock/videos/1043833612/preview/stock-footage-professional-ecology-engineer-holding-futuristic-gadget-cheching-efficiency-data-of-wind-turbines.webm" />
      </Player>
      </div>
          </div>
        <div class="grid-container ">
            <div class="grid-item">
             <label > Industry insights</label>
              <p>
                <ul>
                  <li>Jobs in demand</li> 
                  <li>Major Clients</li>
                  <li>Huge inclination of companies towards Data science.</li>
                  <li> Data science helps industires to make better 
                decisions for thier business according to market analsysis
                and risks.</li>
                <li>Survey shows that this will generate over 2 Million jobs 
                in market in next decade.</li>
                <li>Huge lack of required skills in the professionals.</li>
                </ul>
              </p>
            </div>
            
            <div class="grid-item">
              <label>Alumni Speaks</label>
              <p>
                <ul>
               <li> Meet the pioneers from the industry and their expectations.</li>
               
               <li> Industry pioneers and experts shows the increasee in demand.</li>
               <li>Alumni benifitted from these courses.</li>
               <li> Experts from the industry who contributed to this cuirriculam.</li>
                <li>Teachers /students/Placed</li>
                </ul>
              </p>
            </div>
            <div class="grid-item">
             <label> Learning Path</label>
              <p>
                <ul>
               <li> How learning is a journey from this.</li>
               <li>Learning from Industry insights to live freelancing projects</li>
               <li> Sessions with Alumnis on doubts and interview preparations.</li>
               <li> Teacher, guest teacher</li>
                </ul>
              </p>
            </div>
            <div class="grid-item"><label>Curriculum /fee structure</label>
            <p>
              <ul>
                <li>whats in the course</li>
<li>Topics to cover</li>
<li> How many lectures on the topic</li>
              </ul>
              </p>
              </div>
          </div>
            <div className="blur-top"></div>
         
        </div>
      </div>
    );
  }
}

export default ViewMore;
