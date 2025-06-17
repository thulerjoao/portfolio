import { SectionsType } from "../../types/sectionsType";
import AboutMe from "./sections/aboutMe";
import Contact from "./sections/contact";
import Experience from "./sections/experience";
import Portfolio from "./sections/portfolio";
import Qualifications from "./sections/qualifications";
import Welcome from "./sections/welcome";



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
