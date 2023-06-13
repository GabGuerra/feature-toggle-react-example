export type Environment = "dev" | "prod";

export interface Feature {
  env: Environment 
  enabled: boolean;
}

export interface FeatureToggle {
  [key: string]: Feature[];
}
