import styled from "styled-components";
import theme from "../../styles/theme";

export const ContentListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    section {
        width: 100%;
        max-width: 90rem;
        display: flex;
        justify-content: flex-end;
        
        .contentList {
            /* background-color: ${theme.colors.tranparent30}; */
            height: 100svh;
            width: calc(100% - 350px);
            padding: 60px 30px;
        }
    }
`
