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
      justify-content: space-around;
      align-items: center;
      max-width: 78rem;

      .project {
        max-width: 65rem;
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        margin-bottom: 8rem;

        .title {
          display: flex;
          margin-top: 6vh;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;

          h3 {
            margin: 0;
            margin-right: 1vw;
            min-width: 11.5rem;
            font-size: 28px;
            font-weight: 500;
            margin-top: 1vh;
            
          }

          a {
            padding: 6px 0;
            background-color: ${theme.colors.cleanBc};
            border: 1px solid ${theme.colors.tranparent30};
            border-radius: 15px;
            font-size: 12px;
            width: 7rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            cursor: pointer;
            text-decoration: none;
            margin-top: 1vh;

            :hover {
              box-shadow: 0px 0px 5px 1px ${theme.colors.white};
            }
          }
        }

        h4 {
          font-weight: 300;
          margin: 32px 0;
          text-align: justify;
        }

        .tecnologies {
          padding: 16px;
          padding-bottom: 0;
          min-width: 100%;

          p {
            margin: 4px 0;
          }
        }

        .mediaContainer {
          display: flex;
          justify-content: center;
          min-width: 100%;
          height: 35rem;
          margin-bottom: 40rem;

          .leftContainer {
            min-width: 50%;

            .video {
              max-width: 100%;
              overflow: hidden;
              display: flex;
              justify-content: center;

              video {
                max-width: 100%;
                height: 35rem;
              }
            }
          }

          .rightContainer {
            min-width: 50%;

            .figma {
              border: 0px;
              width: 100%;
              height: 100%;
            }
          }
        }
      }

      .last {
        margin-bottom: 25vh;
      }
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

        .last {
          margin-bottom: 25vh;
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


// .mediaContainer {
//           display: flex;
//           justify-content: center;
//           min-width: 100%;
//           height: 35rem;
//           margin-bottom: 40rem;

//           .leftContainer {
//             min-width: 50%;

//             .video {
//               max-width: 100%;
//               overflow: hidden;
//               display: flex;
//               justify-content: center;

//               video {
//                 max-width: 100%;
//                 height: 35rem;
//               }
//             }
//           }

//           .rightContainer {
//             min-width: 50%;

//             .figma {
//               border: 0px;
//               width: 100%;
//               height: 100%;
//             }
//           }
//         }