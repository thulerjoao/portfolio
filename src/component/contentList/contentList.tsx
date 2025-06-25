import Bra from "../../assets/image/braFlag.png";
import Eua from "../../assets/image/euaFlag.png";
import { LanguageType } from "../../types/languageType";
import { SectionsType } from "../../types/sectionsType";
import AboutMe from "./sections/aboutMe";
import Contact from "./sections/contact";
import Portfolio from "./sections/portfolio";
import Qualifications from "./sections/qualifications";
import Welcome from "./sections/welcome";

import { ContentListContainer, LanguageSelectorContainer } from "./style";

interface Props {
  activeSection: SectionsType;
  scrollToSection: (sectionId: SectionsType) => void;
  language: LanguageType;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageType>>;
}

const ContentList = ({
  activeSection,
  scrollToSection,
  language,
  setLanguage,
}: Props) => {
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
          {/* <section id="experience">
            <Experience />
            </section> */}
          <section id="about me">
            <AboutMe />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
        <LanguageSelectorContainer>
          <img onClick={() => setLanguage("eua")} className={language === "eua" ? "eua" : ""} src={Eua} />
          <img onClick={() => setLanguage("bra")} className={language === "bra" ? "bra" : ""} src={Bra} />
        </LanguageSelectorContainer>
      </section>
    </ContentListContainer>
  );
};

export default ContentList;
