import { useEffect, useState } from "react";
import AsideMenu from "../../Components_Two/asideMenu";

import ContentList from "../../Components_Two/contentList/contentList";
import { SectionsType } from "../../types/sectionsType";
import { ProjectTwoContainer } from "./style";

const ProjectTwo = () => {
  const [activeSection, setActiveSection] = useState<SectionsType>("welcome");

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
    <ProjectTwoContainer>
      <AsideMenu
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <ContentList
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
    </ProjectTwoContainer>
  );
};

export default ProjectTwo;
