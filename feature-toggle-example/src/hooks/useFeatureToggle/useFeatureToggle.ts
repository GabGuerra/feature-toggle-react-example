import { useAtom, useAtomValue } from "jotai";
import { featureToggleAtom } from "../../atoms/featureToggleAtom";
import { Environment } from "../../models/FeatureToggle";

export default function useFeatureToggle() {
  const features = useAtomValue(featureToggleAtom);

  const isEnabled = (featureName: string, env: Environment) => {
    const feature = features[featureName];
    if (!feature) {
      return false;
    }

    const featureEnv = feature.find((f) => f.env === env);
    return featureEnv?.enabled ?? false;
  };

  return { isEnabled };
}
