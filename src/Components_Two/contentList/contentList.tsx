import { SectionsType } from "../../types/sectionsType";
import AboutMe from "./blocs/aboutMe";
import Contact from "./blocs/contact";
import Experience from "./blocs/experience";
import Portfolio from "./blocs/portfolio";
import Qualifications from "./blocs/qualifications";
import Welcome from "./blocs/welcome";

import { ContentListContainer } from "./style";

interface Props {
  activeSection: SectionsType;
  scrollToSection: (sectionId: SectionsType) => void;
}

const ContentList = ({ activeSection, scrollToSection }: Props) => {
  return (
    <ContentListContainer>
      <section>
        <div className="contentList">
          <section id="welcome">
            <Welcome scrollToSection={scrollToSection} />
          </section>
          <section id="qualifications">
            <Qualifications />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="about me">
            <AboutMe />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </section>
    </ContentListContainer>
  );
};

export default ContentList;
