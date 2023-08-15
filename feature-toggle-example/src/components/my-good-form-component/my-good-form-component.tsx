import { useEffect, useState } from "react";
import useFeatureToggle from "../../hooks/useFeatureToggle/useFeatureToggle";
import { Environment } from "../../models/FeatureToggle";
import styles from "./my-good-form-component.module.scss";

interface Props {
  env: Environment;
}

export default function MyGoodFormComponent(props: Props) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  const featureToggle = useFeatureToggle();

  const [isRedFontEnabled, setIsRedFontEnabled] = useState(false);
  const [isPhoneOnFormEnabled, setIsPhoneOnFormEnabled] = useState(false);

  useEffect(() => {
    /* in a real application the ideal would be to have only one call and
     return something like this
     { 
      "red_font_color": true,
      "add_phone_on_form": false
     }
    */
    setIsRedFontEnabled(featureToggle.isEnabled("red_font_color", props.env));
    setIsPhoneOnFormEnabled(featureToggle.isEnabled("add_phone_on_form", props.env));
  
  }, [featureToggle]);

  const environmentTitleClass = isRedFontEnabled
    ? styles.redTitle
    : styles.envTitle;

  return (
    <div className={styles.goodComponent}>
      <h1>
        <span className={environmentTitleClass}>
          {props.env.toLocaleUpperCase()}
        </span>{" "}
        Environment
      </h1>
      <form className={styles.myForm} onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input className={styles.formInput} type="text" id="name" />
        </div>
        <div>
          <label>Email:</label>
          <input className={styles.formInput} type="email" id="email" />
        </div>
        {isPhoneOnFormEnabled && (
          <div>
            <label>Phone:</label>
            <input className={styles.formInput} type="text" id="phone" />
          </div>
        )}
        <div>
          <button type="submit" className={styles.formSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
