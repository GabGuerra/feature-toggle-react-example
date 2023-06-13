import { atom } from "jotai";
import { FeatureToggle } from "../../models/FeatureToggle";

export const featureToggleAtom = atom<FeatureToggle>({
  red_front_color: [
    { env: "dev", enabled: true },
    { env: "prod", enabled: false },
  ],
  add_phone_on_form: [
    { env: "dev", enabled: true },
    { env: "prod", enabled: false },
  ],
});