import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postRecipe, getTypeDiet } from "../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./RecipeCreate.module.css";
import imagen from "../images/pexels-rene-asmussen-2544829.jpg";
import Footer from "./Footer";

function validate(input) {
  let errors = {};
  if (!input.title) {
    errors.title = "Title is require";
  } else if (!input.summary) {
    errors.summary = "Summary is require";
  }  else if (input.healthScore > 100 || input.healthScore < 1) {
    errors.healthScores = "Health score is require";
   } 
  else if (!input.steps) {
     errors.steps = "Steps are require";
  }

  return errors;
}

let recipeId = 5;

export default function RecipeCreate() {
  var imagenes = { backgroundImage: `url(${imagen})` };

  const stateInitialForms = {
    title: "",
    summary: "",
    healthScore: "",
    steps: "",
    image: "",
    sourceName: "",
    diets: [],
  };

  const [input, setInput] = useState(stateInitialForms);
  const [errors, setErrors] = useState({});

  function handleDelete(e) {
    setInput({
      ...input,
      diets: input.diets.filter((t) => t !== e),
    });
  }

  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  console.log(diets)

  useEffect(() => {
    dispatch(getTypeDiet());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setInput({
      ...input,

      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      diets: [...input.diets, e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).length > 0) {
      alert("Please complete the information required");
    } else if (
      input.title === "" &&
      input.summary === "" &&
      input.healthScore === "" &&
      input.steps === "" &&
      !input.diets.length
      
    ) {
      alert("Please complete the form");
    } else {
      dispatch(postRecipe(input));
      alert("New recipe added successfully!");
      setInput({
        title: "",
        image: "",
        healthScore: "",
        steps: "",
        summary: "",
        sourceName: "",
        diets: [],
      });
    }
  };

  return (
    <body className={styles.bodyCreate} style={imagenes}>
      <div className={styles.container}>
        <Link to="/home">
          <button className={styles.btn}>Back</button>
        </Link>

        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <label className={styles.label}>Title:</label>
          <input
            className={styles.input}
            type="text"
            name="title"
            value={input.title}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.title && <p className={styles.errors}>{errors.title}</p>}

          {/* <label className={styles.label}>Dish Type:</label>
          <input
            className={styles.input}
            type="text"
            name="dishTypes"
            value={input.dishTypes}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.dishTypes && (
            <p className={styles.errors}>{errors.dishTypes}</p>
          )} */}

          <label className={styles.label}>Health Score:</label>
          <input
            className={styles.input}
            type="number"
            name="healthScore"
            min="10"
            max="100"
            value={input.healthScore}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.healthScore && (
            <p className={styles.errors}>{errors.healthScore}</p>
          )}

          <label className={styles.label}>Steps:</label>
          <input
            className={styles.input}
            type="text"
            name="steps"
            value={input.steps}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.steps && (
            <p className={styles.errors}>{errors.steps}</p>
          )}

          <label className={styles.label}>Image:</label>
          <input
            className={styles.input}
            type="text"
            name="image"
            value={input.image}
            onChange={(e) => handleInputChange(e)}
          />

          <label className={styles.label}>Author:</label>
          <input
            className={styles.input}
            type="text"
            name="sourceName"
            value={input.sourceName}
            onChange={(e) => handleInputChange(e)}
          />

          <label className={styles.label}>Summary:</label>
          <input
            className={styles.summary}
            type="text"
            name="summary"
            value={input.summary}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.summary && <p className={styles.errors}>{errors.summary}</p>}

          <select className={styles.dietss} onChange={(e) => handleSelect(e)}>
            {diets.map((dl) => (
              <option style={styles.dietTexts} key={recipeId++} value={dl.name}>
                {dl.name}
              </option>
            ))}
          </select>

          {/* <h1 className={styles.title}>Create Recepe</h1> */}

          <button className={styles.btnCreate} type="submit">
            Create Recipe
          </button>
          {input.diets.map((d) => (
            <div className={styles.div}>
              <p className={styles.p}>{d}</p>
              <button
                key={recipeId++}
                className={styles.btn}
                onClick={() => handleDelete(d)}
              >
                x
              </button>
            </div>
          ))}
        </form>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </body>
  );
}
