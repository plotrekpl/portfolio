import { PageData } from "../models/PageData";
import html5Logo from "./../assets/skills/html5.svg";
import css3Logo from "./../assets/skills/css3.svg";
import jsLogo from "./../assets/skills/js.svg";
import gitLogo from "./../assets/skills/git.svg";
import reactLogo from "./../assets/skills/react.svg";
import styledLogo from "./../assets/skills/styled-components.svg";
import typescriptLogo from "./../assets/skills/typescript.svg";
import mobxLogo from "./../assets/skills/mobx.svg";
import englishLogo from "./../assets/skills/english.svg";
import dotnetLogo from "./../assets/skills/dotnet.svg";
import sqlliteLogo from "./../assets/skills/sqlite.svg";
import flutterLogo from "./../assets/skills/flutter.svg";
import reduxLogo from "./../assets/skills/redux.svg";
import graphqlLogo from "./../assets/skills/graphql.svg";
import gatsbyLogo from "./../assets/skills/gatsby.svg";
import vscLogo from "./../assets/skills/vsc.svg";
import prittierLogo from "./../assets/skills/prettier.svg";
import responsiveLogo from "./../assets/skills/responsive.svg";
import prof from "./../assets/prof.png";

import { Skill } from "../models/Skill";

export const AboutData: PageData = {
  aboutHreder: "Cześć!",
  aboutDescription:
    "Nazywam się Piotr Krysiak. \n Jestem studentem Informatyki \n na Politechnice Częstochowskiej na III roku. \n Specjalizację jaką wybrałem to Programowanie Aplikacji Internetowych. \n Programowaniem interesuję się od liceum, \n przez te wszystkie lata poznawałem różne języki oraz technologię jak np. SQL i .NET. \n Najlepiej natomiast się czuję przy tworzeniu interfejsów użytkownika. \n Aktualnie zajmuję się głównie nauką oraz tworzeniem stron przy użyciu React i TypeScript. \n Są to technologię w których chciałbym się rozwijać. \n ",
  aboutImg: prof,
  heroImg:
    "https://cdn.pixabay.com/photo/2021/03/02/12/20/mountains-6062271_960_720.jpg",
  heroP: "My name is Piotr",
  heroH: "I'M DEVELOPER",
  mail: "krysiakpiotr14@gmail.com",
  phone: "790 720 515"
};

export const title = "Używam i uczę się:";
export const itemsData: Array<Skill> = [
  {
    id: 1,
    image: html5Logo,
    description: "HTML 5",
  },
  {
    id: 2,
    image: css3Logo,
    description: "CSS",
  },
  {
    id: 3,
    image: jsLogo,
    description: "JavaScript",
  },
  {
    id: 4,
    image: gitLogo,
    description: "Git",
  },
  {
    id: 5,
    image: reactLogo,
    description: "React",
  },
  {
    id: 6,
    image: styledLogo,
    description: "styled-components",
  },
  {
    id: 7,
    image: typescriptLogo,
    description: "TypeScript",
  },
  {
    id: 8,
    image: mobxLogo,
    description: "Mobx",
  },
];

export const titleOthers = "Inne:";
export const itemsDataOthers: Array<Skill> = [
  {
    id: 1,
    image: englishLogo,
    description: "B2",
  },
  {
    id: 2,
    image: dotnetLogo,
    description: ".NET",
  },
  {
    id: 3,
    image: sqlliteLogo,
    description: "Sqlite",
  },
  {
    id: 4,
    image: flutterLogo,
    description: "Flutter",
  },
];

export const titleToLearn = "Planuję poznać:";
export const itemsDataToLearn: Array<Skill> = [
  {
    id: 1,
    image: reduxLogo,
    description: "Redux",
  },
  {
    id: 2,
    image: graphqlLogo,
    description: "GraphqlCMS",
  },
  {
    id: 3,
    image: gatsbyLogo,
    description: "Gatsby",
  },
];

export const titleConfig = "Konfiguracja: ";
export const itemsDataConfig: Array<Skill> = [
  {
    id: 1,
    image: vscLogo,
    description: "Visual Studio Code",
  },
  {
    id: 2,
    image: prittierLogo,
    description: "Czysty kod",
  },
  {
    id: 3,
    image: responsiveLogo,
    description: "Responsywność",
  },
];
