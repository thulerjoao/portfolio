import {
  siCss,
  siDocker,
  siExpress,
  siFigma,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMongodb,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siTypescript,
  siYarn,
} from "simple-icons";
import { LanguageType } from "../../../../types/languageType";
import Card from "./card";
import { QualificationsContainer } from "./style";

interface Props {
  language: LanguageType;
}

const Qualifications = ({ language }: Props) => {
  return (
    <QualificationsContainer>
      <h2>{language === "bra" ? "Qualificações" : "Qualifications"}</h2>
      <h3>Front-end</h3>
      <div className="cardsList">
        <Card
          icon={
            <svg role="img">
              <path fill="#61DAFB" d={siReact.path} />
            </svg>
          }
          title="React JS"
          description={language === "bra" ? "+ de 3 anos de experiência" : "3+ years of experience"}
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#8b71b8" d={siReact.path} />
            </svg>
          }
          title="React Native"
          description={language === "bra" ? "+ de 2 anos de experiência" : "2+ years of experience"}
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#ffffff" d={siNextdotjs.path} />
            </svg>
          }
          title="Next JS"
          description={language === "bra" ? "+ de 2 anos de experiência" : "2+ years of experience"}
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#3378c6" d={siTypescript.path} />
            </svg>
          }
          title="Type Script"
          description={language === "bra" ? "+ de 3 anos de experiência" : "3+ years of experience"}
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#f3e050" d={siJavascript.path} />
            </svg>
          }
          title="Java Script"
          description={language === "bra" ? "+ de 3 anos de experiência" : "3+ years of experience"}
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#d45836" d={siHtml5.path} />
            </svg>
          }
          title="HTML"
          description={language === "bra" ? "+ de 3 anos de experiência" : "3+ years of experience"}
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#5499d2" d={siCss.path} />
            </svg>
          }
          title="CSS"
          description={language === "bra" ? "+ de 3 anos de experiência" : "3+ years of experience"}
        />
      </div>
      <h3>Design and UX</h3>
      <div className="cardsList">
        <Card
          icon={
            <svg role="img">
              <path fill="#e74c1f" d={siFigma.path} />
            </svg>
          }
          title="Figma"
          description={language === "bra" ? "Experiência acadêmica" : "Academic experience"}
        />
      </div>
      <h3>Back-end</h3>
      <div className="cardsList">
        <Card
          icon={
            <svg role="img">
              <path fill="#e22c53" d={siNestjs.path} />
            </svg>
          }
          title="Nest JS"
          description={language === "bra" ? "Experiência acadêmica" : "Academic experience"}
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#ffffff" d={siExpress.path} />
            </svg>
          }
          title="Express"
          description={language === "bra" ? "Experiência acadêmica" : "Academic experience"}
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#91bb5a" d={siNodedotjs.path} />
            </svg>
          }
          title="Node JS"
          description={language === "bra" ? "Experiência acadêmica" : "Academic experience"}
        />
      </div>
      <h3>Database</h3>
      <div className="cardsList">
        <Card
          icon={
            <svg role="img">
              <path fill="#ffffff" d={siPostgresql.path} />
            </svg>
          }
          title="PostgreSQL"
          description={language === "bra" ? "Experiência acadêmica" : "Academic experience"}
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#47a248" d={siMongodb.path} />
            </svg>
          }
          title="MongoDb"
          description={language === "bra" ? "Experiência acadêmica" : "Academic experience"}
        />
      </div>
      <h3>Outros</h3>
      <div className="cardsList">
        <Card
          icon={
            <svg role="img">
              <path fill="#f05132" d={siGit.path} />
            </svg>
          }
          title="Git"
          description={language === "bra" ? "+ de 3 anos de experiência" : "3+ years of experience"}
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#ffffff" d={siGithub.path} />
            </svg>
          }
          title="GitHub"
          description={language === "bra" ? "+ de 3 anos de experiência" : "3+ years of experience"}
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#2596ed" d={siDocker.path} />
            </svg>
          }
          title="Docker"
          description={language === "bra" ? "+ de 1 anos de experiência" : "1+ years of experience"}
        />
        {/* <Card
          icon={
            <svg role="img">
              <path fill="#514c87" d={siYarn.path} />
            </svg>
          }
          title="Workspace Yarn"
          description="+ de 1 ano de experiência"
        /> */}
      </div>
    </QualificationsContainer>
  );
};

export default Qualifications;
