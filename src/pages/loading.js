import Si from "./si";
import En from "./en";

export default function Loading() {
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang === "sl") {
    return <Si />;
  } else {
    return <En />;
  }
}
