import styled, { css } from "styled-components";

export const ProjectsComponent = styled.div`
  ${({ theme }) => css`
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    color: white;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 0px;
    }

    .projectsList {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      max-width: 78rem;
      padding-bottom: 4rem;
    }
    
    @media screen and (max-width: 1025px) {
      padding: 0 16px;
      
      ::-webkit-scrollbar {
        width: 0px;
      }
      
      .projectsList {
        .project {
          .title {
            h3 {
            }

            a {
            }
          }

          h4 {
          }

          .tecnologies {
            p {
            }
          }

          .mediaContainer {
            .leftContainer {
              .video {
                video {
                }
              }
            }

            .rightContainer {
              .figma {
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      padding: 0;
      height: 96vh;
      min-width: 100vw;
      left: 0;

      ::-webkit-scrollbar {
        width: 0px;
      }

      .projectsList {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        max-width: 78rem;

        .projectsList {
          .project {
            .title {
              h3 {
              }

              a {
              }
            }
            
            h4 {
            }
            
            .tecnologies {
              padding: 12px 0;
              p {
              }
            }
            
            .mediaContainer {
              flex-direction: column;
              height: auto;

              .leftContainer {
                width: 100%;
                
                .video {
                  width: 100%;
                  height: 50vh;

                  video {
                    max-width: 100%;
                    max-height: 100%;
                  }
                }
              }

              .rightContainer {
                width: 100%;
                height: 40vh;
                .figma {
                }
              }
            }
          }
        }
      }

      @media screen and (max-width: 600px) {
        padding: 0;
        height: 96vh;
        min-width: 100vw;
        left: 0;

        ::-webkit-scrollbar {
          width: 0px;
        }

        .projectsList {
          .project {
            .title {
              h3 {
              }

              a {
              }
            }
            
            h4 {
            }
            
            .tecnologies {
              padding: 12px 0;
              p {
              }
            }
            
            .mediaContainer {
              flex-direction: column;
              height: auto;

              .leftContainer {
                width: 100%;
                
                .video {
                  width: 100%;
                  height: 50vh;

                  video {
                    max-width: 100%;
                    max-height: 100%;
                  }
                }
              }

              .rightContainer {
                width: 100%;
                height: 40vh;
                .figma {
                }
              }
            }
          }
        }
      }
    }
  `}
`;