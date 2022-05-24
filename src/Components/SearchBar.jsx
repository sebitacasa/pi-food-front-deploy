import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../Redux/Actions";
import styles from './Search.module.css' 
import { Form, Button, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function SearchBar() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState('')

  function handleInputChange(e) {
    e.preventDefault(e);
    setTitle(e.target.value);
    setSearch("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getByName(title));
  }

  return (
    // <div className={styles.search} >
    //   <div className={styles.searchBox}>
    //   <input className={styles.searchInput}
    //     type="text"
    //     placeholder="Search.."
    //     onChange={(e) => handleInputChange(e)}
    //   />

    //   <button  className={styles.btnsearch} type="submit" onClick={(e) => handleSubmit(e)} ><FaSearch size={20}/></button>
    //   </div>
     
    // </div>

<Form className="d-flex">
<FormControl style={{height: 37, marginBottom: 3, marginRight: 5}} 
 type="text"
 placeholder="Search.."
 onChange={(e) => handleInputChange(e)}
/>
<Button style={{marginLeft: 5, height: 37, fontWeight: "bold", color: "orange"}} variant="secondary" type="submit" onClick={(e) => handleSubmit(e)}>Search</Button>
</Form>
  );
}
