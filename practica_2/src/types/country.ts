
export type Country = {
  flag: string;
  name: Name;
}

type Name = {
  common: string;
  official: string;
  nativeName: NativeName;
}

type NativeName = {
  spa: Translation;
}

type Translation = {
  official: string;
  common: string;
}

export default Country;
