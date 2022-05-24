import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Actions from "../Redux/Actions";

import Paginado from "./Pagina";
import SearchBar from "./SearchBar";
import styles from "./Home.module.css";
import { CardGroup, Navbar, NavbarBrand } from "react-bootstrap";
import Individual from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Alert, NavDropdown , Nav, FormControl, Form, Container, Select} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import imagen from '../images/pexels-rene-asmussen-2544829.jpg'
import Footer from "./Footer";
import { Spinner } from "react-bootstrap";




export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);


 

  const [order, setOrder] = useState("");

 
  const [currentPage, setCurrentPage] = useState(1); // primero declaro un estado de la pagina en la posicion actual.
  const [recipesPerPage, setRecipesPerPage] = useState(9); // cantidad de recetas por pagina --- arranca en 9
  const indexLastRecipe = currentPage * recipesPerPage; // se setea el ultimo index de la pagina --- que es el resultado de la * entre la pagina actual y la cantidad de recetas por pagina
  const indexFirstRecipe = indexLastRecipe - recipesPerPage; // lo mismo solo que la resta del ultimo index con la cantidad de recetas por pag.
  const currentRecipes = allRecipes.slice(indexFirstRecipe, indexLastRecipe); // aca realiza el slice que va a dividir la pagina osea 1 ---0--- 9

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


   useEffect(() => {
    setCurrentPage(1);
  }, [setCurrentPage, allRecipes]); // 



  function handlePuntuation(e) {
    e.preventDefault();
    dispatch(Actions.orderByScore(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  function handleAlphabetic(e) {
    e.preventDefault();
    dispatch(Actions.orderByAlphabetic(e.target.value))
    setCurrentPage(1)
    setOrder(e.target.value)
  }

  
  useEffect(() => {
   
    dispatch(Actions.getAllRecipes());
    
  }, [dispatch]);

  function handleOnClick(e) {
    e.preventDefault();
    dispatch(Actions.getAllRecipes()); // con el handler hacemos un refresh de todas las recetas
  }
  
  function hadleFilterTypeDiet(e) {
    dispatch(Actions.orderByTypeDiet(e.target.value)); // filtra por tipo de dieta
  }
 
  var images = {backgroundImage: `url(${imagen})`}
 
  
  return (
    
    
    
    <body className={styles.bodyHome} style={images}  >
      
    <div className={styles.boxContainer}>
      <div className={styles.container}>
      <Navbar  bg="dark" variant="light" expand="lg">
  <Container fluid>
    <Navbar.Brand style={{color:"orange"}} >Henry Food</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
        <LinkContainer style={{color:"rgb(235, 125, 0)"}} to ='/'><Nav.Link>Home</Nav.Link></LinkContainer>
        <Nav.Link style={{color:"rgb(235, 125, 0)"}} >Refresh Page</Nav.Link>
        
        <LinkContainer style={{color:"rgb(235, 125, 0)",}}  to ="/recipes/post" >
          <Nav.Link  >
          Create Recipe
        </Nav.Link>
        </LinkContainer>
        <Form  className="d-flex">
        <Form.Select onChange={e => hadleFilterTypeDiet(e)} style={{width: 150, height: 37, marginBottom: 3, paddingBottom: 1, paddingTop: 2}} aria-label="Default select example">
                    <option value="All">All recipes</option>
                    <option value="gluten free">Gluten Free</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="vegetarian">Vegetarian </option>
                    <option value="lacto-vegetarian">Lacto-Vegetarian </option>
                    <option value="lacto ovo vegetarian">Ovo-Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="paleolithic">Paleolithic</option> 
                    <option value="primal">Primal</option>
                    <option value="whole 30">Whole 30</option>
          </Form.Select>
          
          
          
          <Form.Select  onChange={e => handlePuntuation(e)} style={{width: 75, marginLeft: 5, marginBottom: 1, height: 37, paddingBottom: 1, paddingTop: 2 }} aria-label="Default select example">
                    <option value="asc">asc</option>
                    <option value="des">des</option>
          </Form.Select>
          
          <Form.Select  onChange={e => handleAlphabetic(e)} style={{width: 73, marginLeft: 5,  height: 37, marginBottom: 1, paddingBottom: 1, paddingTop: 2 }} aria-label="Default select example" >
                    <option value="asc">a-z</option>
                    <option value="des">z-a</option>
          </Form.Select>
         
          </Form>
      </Nav>
      <Form  className="d-flex">
      <SearchBar/>
      </Form>
    </Navbar.Collapse>
  </Container>
  
</Navbar>


     
      <div className={styles.paginado}> 
            <Paginado
            recipesPerPage = {recipesPerPage}
            allRecipes = {allRecipes.length}
            paginado= {paginado}
            />
            </div>     

        <div className={styles.cards}>
            { currentRecipes.length > 0 ? currentRecipes.map( (e) => {
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

                return (
                    
                      <div key={e.id}>
                        
                    <Link to={`/recipes/${e.id}`}>
                    <Individual title={e.title} 
                    image={e.image} 
                    diets={e.diets} 
                    key={e.id}
                    healthScore={e.healthScore}
                    sourceName={e.sourceName}
                    />
                    </Link>
                    </div>
                    )  
                }) :   <div className={styles.alert}>
                <Alert className={styles.alertText}><h3 className={styles.text404}>404<br/> <br/> No recipe found !!</h3></Alert>     
              </div>
             
            } 
            </div>
            
            
            <div className={styles.footer}>

            <Footer/> 
            </div>
            </div>
              </div>
                    
    </body>
)
}
                
                    
           
          
             
              
            


