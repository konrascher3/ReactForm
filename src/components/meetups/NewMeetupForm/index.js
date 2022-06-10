import { useRef } from "react";

import Card from "../../ui/Card";
import classes from "./styles.module.css";

export default function NewMeetupForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    //const enteredTitle = titleInputRef.current.value;
    //const enteredImageUrl = imageInputRef.current.value;
    //const enteredAddress = addressInputRef.current.value;
    //const enteredDescription = descriptionInputRef.current.value;

    console.log(titleInputRef);
    //const meetupData = {
    //title: enteredTitle,
    //image: enteredImageUrl,
    //address: enteredAddress,
    //description: enteredDescription
    //};
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Titel</label>
          <input required type="text" id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="url">Bild</label>
          <input required type="text" id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Adresse</label>
          <input required type="text" id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Beschreibung</label>
          <textarea
            required
            rows="5"
            id="description"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Hinzufügen</button>
        </div>
      </form>
    </Card>
  );
}
