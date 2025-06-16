import Welcome from "./blocs/Welcome";
import { ContentListContainer } from "./style";

const ContentList = () => {
  return (
    <ContentListContainer>
      <section>
        <div className="contentList">
          <Welcome />
        </div>
      </section>
    </ContentListContainer>
  );
};

export default ContentList;
