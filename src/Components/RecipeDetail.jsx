import React from "react";
import { getById, detailClean } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./RecipeDetail.module.css";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "./recipe.css";
import images from "../images/pexels-rene-asmussen-2544829.jpg";
import Footer from "./Footer";

var imagen = { backgroundImage: `url(${images})` };

export default function Detail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const recipeDetail = useSelector((state) => state.details);
  console.log(recipeDetail);

  useEffect(() => {
    dispatch(getById(id));

    return () => {
      dispatch(detailClean());
    };
  }, [dispatch]);

  return (
    <body className={styles.bodyDetail} style={imagen}>
      <div className={styles.detailsContainer}>
        {recipeDetail.length > 0 ? (
          <div className={styles.container}>
            <Link to="/home">
              <button className={styles.btn}>Back to main Page </button>{" "}
            </Link>
            <Card
              className="card-container"
              style={{
                color: "#000",
                marginBottom: 50,
                background: "rgba(243, 243, 243, 0.42)",
                margin: "auto",
                height: "auto",
                width: 1000,
                
              }}
            >
              <Card.Img style={{width: 330, height: "auto", marginRight: 30, marginTop: 25}}
                className="card-img"
                
                src={
                  recipeDetail[0].image
                    ? recipeDetail[0].image
                    : "https://st.depositphotos.com/1036708/2191/i/600/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg"
                }
              />
              <Card.Body style={{ width: 220, height: "auto"}}>
                <Card.Title style={{ textDecoration: "none" }}>
                  <h3 className="title">{recipeDetail[0].title}</h3>
                </Card.Title>
                <label className="label-diet">Type of diets: </label>
                <Card.Text className="card-text-diet">
                  <h5 className="diet">
                    {recipeDetail[0].diets.map((t) => t.name + ", ")}
                  </h5>
                </Card.Text>
                <label className="summary-label">Summary: </label>
                <Card.Text style={{}} className="card-text-summary">
                  <p>{recipeDetail[0].summary?.replace(/<[^>]*>/g, '')}</p>
                </Card.Text>
                    <label className="steps-label"><strong>Steps: </strong></label>
                <Card.Text style={{marginRight: 50}}className="card-text-steps">
                  <h5 className="steps">
                    
                    {Array.isArray(recipeDetail[0].analyzedInstructions)
                      ? recipeDetail[0].analyzedInstructions.map((e) =>
                          e.steps.map((f) => f.step)
                        )
                      : recipeDetail[0].steps}
                  </h5>
                </Card.Text>
              </Card.Body>
              <Card></Card>
            </Card>
          </div>
        ) : (
          <div className="spinner">
          <Spinner
            style={{
              color: "rgb(253, 253, 253)",
              marginLeft: 850,
              marginTop: 150,
              fontSize: 250,
            }}
            animation="border"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          </div>
        )}
      </div>
      <div className={styles.footer}>

<Footer/>
</div>
    </body>
  );
}

//     <div  >

//     <Link to='/home'><button className={styles.btn}>Back to main Page </button> </Link>

//     <h1 className={styles.title}><strong> {recipeDetail[0].title} </strong></h1>

//         <img className= {styles.image} src={recipeDetail[0].image ? recipeDetail[0].image :'https://st.depositphotos.com/1036708/2191/i/600/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg'}/>

//      <div className={styles.div} >
//     <h3 className={styles.type}>Type Diet: {recipeDetail[0].diets.map(t => t.name + ', ')}</h3>

//     <h5 className={styles.summary} ><strong>summary:</strong> {recipeDetail[0].summary}</h5>
//     {/* <h5 className={styles.healthScore}  ><strong>healthScore:</strong> {recipeDetail[0].healthScore}</h5> */}
//     <h5  className={styles.summary}  ><strong>steps:</strong>{ Array.isArray(recipeDetail[0].analyzedInstructions) ? recipeDetail[0].analyzedInstructions.map(e => e.steps.map(f => f.step)) : recipeDetail[0].analyzedInstructions }</h5>
//     </div>
// </div> :

// <Spinner style={{color:"rgb(253, 253, 253)", margin:"auto", fontSize: 350}} animation="border" role="status">
// <span  className="visually-hidden">Loading...</span>
//    </Spinner>
