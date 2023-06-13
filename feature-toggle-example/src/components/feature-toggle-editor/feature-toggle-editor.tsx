import { useAtom } from "jotai";
import { featureToggleAtom } from "../../atoms/featureToggleAtom";
import { Feature } from "../../models/FeatureToggle";
import styles from "./feature-toggle-editor.module.scss";

export default function FeatureToggleEditor() {
  const [featureToggle, setFeatureToggle] = useAtom(featureToggleAtom);

  const toggleEnabled = (featureKey: string, env: string) => {
    let featureToToggle = featureToggle[featureKey];
    let envToToggle = featureToToggle.find((f) => f.env === env);
    envToToggle!.enabled = !envToToggle?.enabled;

    setFeatureToggle((prev) => ({
      ...prev,
      [featureKey]: featureToToggle,
    }));
  };

  return (    
    <div className={styles.featureToggleEditor}>      
      {Object.keys(featureToggle).map((featureKey) => (
        <div key={featureKey} className={styles.featureToggleRow}>
          <h3 className={styles.featureToggleHeading}>{featureKey}</h3>
          {featureToggle[featureKey].map((f: Feature) => (
            <div key={f.env} className={styles.featureToggleSwitch}>
              <label>
                <div className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={f.enabled}
                    onChange={() => toggleEnabled(featureKey, f.env)}
                  />
                  <span className={styles.slider}></span>
                </div>
                <span>{f.env}</span>
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
