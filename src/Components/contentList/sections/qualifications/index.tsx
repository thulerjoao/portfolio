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
import Card from "./card";
import { QualificationsContainer } from "./style";

const Qualifications = () => {
  return (
    <QualificationsContainer>
      <h2>Qualificações</h2>
      <h3>Front-end</h3>
      <div className="cardsList">
        <Card
          icon={
            <svg role="img">
              <path fill="#61DAFB" d={siReact.path} />
            </svg>
          }
          title="React JS"
          description="+ de 3 anos de experiência"
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#8b71b8" d={siReact.path} />
            </svg>
          }
          title="React Native"
          description="+ de 2 anos de experiência"
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#ffffff" d={siNextdotjs.path} />
            </svg>
          }
          title="Next JS"
          description="+ de 2 anos de experiência"
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#3378c6" d={siTypescript.path} />
            </svg>
          }
          title="Type Script"
          description="+ de 3 anos de experiência"
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#f3e050" d={siJavascript.path} />
            </svg>
          }
          title="Java Script"
          description="+ de 3 anos de experiência"
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#d45836" d={siHtml5.path} />
            </svg>
          }
          title="HTML"
          description="+ de 3 anos de experiência"
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#5499d2" d={siCss.path} />
            </svg>
          }
          title="CSS"
          description="+ de 3 anos de experiência"
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
          description="Experiência acadêmica"
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
          description="Experiência acadêmica"
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#ffffff" d={siExpress.path} />
            </svg>
          }
          title="Express"
          description="Experiência acadêmica"
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#91bb5a" d={siNodedotjs.path} />
            </svg>
          }
          title="Node JS"
          description="Experiência acadêmica"
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
          description="Experiência acadêmica"
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#47a248" d={siMongodb.path} />
            </svg>
          }
          title="MongoDb"
          description="Experiência acadêmica"
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
          description="+ de 3 anos de experiência"
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#ffffff" d={siGithub.path} />
            </svg>
          }
          title="GitHub"
          description="+ de 3 anos de experiência"
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#2596ed" d={siDocker.path} />
            </svg>
          }
          title="Docker"
          description="+ de 1 ano de experiência"
        />
        <Card
          icon={
            <svg role="img">
              <path fill="#514c87" d={siYarn.path} />
            </svg>
          }
          title="Workspace Yarn"
          description="+ de 1 ano de experiência"
        />
      </div>
    </QualificationsContainer>
  );
};

export default Qualifications;
