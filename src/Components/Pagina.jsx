import React from "react";
import styles from './Pagina.module.css'
import "./pagina.css"


export default function Paginado ({recipesPerPage ,  allRecipes , paginado}) {
const pageNumbers = []
    for (let i = 1 ; i < Math.ceil(allRecipes/recipesPerPage) ; i++){ // con el mathCeil redondea la cantidad de recetas que quiero por pagina
   pageNumbers.push(i) // para que muestre en el render directamente desde el 1
}
return (



    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    
    {
               pageNumbers?.map(n => (
                        <li style={{cursor: "pointer", marginTop: 15 }} class="page-item"><a key={n} style={{color: "#000", background: "rgba(165, 165, 165, 0.459)"}}  class="page-link" onClick= {() => paginado(n)} >{n}</a></li>
                    //   <button key={n} className={styles.paginado} onClick= {() => paginado(n)}>{n}</button>
                    
                    
                ))
            }
   
  </ul>
</nav>
    
          
    // <nav  >
    //     <ul className={styles.ul} >
    //         {
    //             pageNumbers?.map(n => (
    //                   <button key={n} className={styles.paginado} onClick= {() => paginado(n)}>{n}</button>
                    
                    
    //             ))
    //         }
    //     </ul>
    // </nav>
            
)
}