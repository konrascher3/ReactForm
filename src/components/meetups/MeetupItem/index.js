import classes from "./styles.module.css";

import Card from "../../ui/Card";

export default function MeetupItem({
  title,
  address,
  description,
  imageLink,
  imagePosition
}) {
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img
            src={imageLink}
            alt={title}
            style={{ objectPosition: imagePosition }}
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favorites</button>
        </div>
      </li>
    </Card>
  );
}
