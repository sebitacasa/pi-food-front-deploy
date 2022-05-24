import React from "react";
//import styles from "./Card.module.css";
//import './recipe.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'react-bootstrap'
import styles from './Card.module.css'


let idRecipe = 3

export default function Individual (recipes) {
    const { image, title, diets, healthScore, sourceName, dishTypes} = recipes
   
    return (
        <div className={styles.container}>
            <Card style={{color: '#000', marginBottom: 65, background:"rgba(225, 225, 225, 0.29)"}}>
          <Card.Img src={image}/>
          <Card.Body  style={{width: 360, height: 440, borderStyle: "none"}}>
              <Card.Title className="title-text" >
                <a className={styles.text}>{title}</a>
                  
              </Card.Title>
              <Card.Text style={{marginLeft: 87, marginBottom: "auto", }} >
              <h6 className={styles.score}>Health Score: {healthScore}</h6> 
              </Card.Text>
                 <label className={styles.label} >Type of diet:</label>
                 
               <Card.Text style={{ width: "auto", height: "auto",   }}>
              {diets?.map((d) => (
            <div  key={idRecipe++}>
              
              <h5 className={styles.dish}> {d.name }</h5>
            </div>  
            ))}             
              </Card.Text > 
             
              
               <Card.Text style={{ width: "auto", height: 50  }}  ><h3 className={styles.author}>Author: {sourceName}</h3></Card.Text> 

          </Card.Body>
          <Card></Card>
      </Card>
        </div>
      
    )
}
             
                

                

                
        






























  // <div className="recipe">
        //     <div>
        //         <h2 className="recipeName">{title}</h2>            
        //     </div>
            
        //     <div>
        //         <img className="recipeImg" src={image} alt="Not found"/>
        //     </div>
            

        //     <div className="dietcointainer">
        //     {diets?.map((d) => (
        //     <div key={idRecipe++}>
             
        //       <h5 className="diets"> {d.name}</h5>
        //     </div>  
        //     ))}       
        //     </div>

        //     <div>
        //       <h6 className="score">Health Score: {healthScore}</h6>
        //     </div>
            
        // </div>

        

