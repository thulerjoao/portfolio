import { useEffect, useState } from "react";

import { SectionsType } from "../../types/sectionsType";

import AsideMenu from "../../component/asideMenu";
import ContentList from "../../component/contentList/contentList";
import { MainPageContainer } from "./style";
import { LanguageType } from "../../types/languageType";

interface Props {
  start: boolean;
}

const Page = ({ start }: Props) => {
  const [activeSection, setActiveSection] = useState<SectionsType>("welcome");
  const [ language,  setLanguage ] = useState<LanguageType>("bra")

  const scrollToSection = (sectionId: SectionsType) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections: SectionsType[] = [
        "welcome",
        "qualifications",
        "portfolio",
        "experience",
        "about me",
        "contact",
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition + 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MainPageContainer start={start}>
      <AsideMenu
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <ContentList
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        language={language}
        setLanguage={setLanguage}
      />
    </MainPageContainer>
  );
};

export default Page;
