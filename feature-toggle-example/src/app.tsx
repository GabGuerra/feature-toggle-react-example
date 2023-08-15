import FeatureToggleEditor from "./components/feature-toggle-editor/feature-toggle-editor";
import style from "./app.module.scss";
import MyGoodFormComponent from "./components/my-good-form-component/my-good-form-component";

function App() {
 // do remember that this is just a demo, in a real application we wouldnt have 
 // multiple environments in the same page
  return (
    <div className={style.container}>
      <div className={style.topSection}>
        <MyGoodFormComponent
          env="dev"
        />
      </div>
      <div className={style.middleSection}>
        <MyGoodFormComponent
          env="prod"
        />
      </div>
      <div className={style.bottomSection}>
        <FeatureToggleEditor />
      </div>
    </div>
  );
}

export default App;
