import { useEffect, useRef, useState } from "react";
import { Button, Container, Iframe, LoadingOverlay } from "./style";

interface Props {
  figmaURL: string;
}

const Figma = ({ figmaURL }: Props) => {
  const [showFigma, setShowFigma] = useState(false);
  const [loading, setLoading] = useState(true);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setShowFigma(false);
        setLoading(true); // reseta o loading pro próximo uso
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const handleOpen = async () => {
    setShowFigma(true);

    setTimeout(() => {
      if (iframeContainerRef.current) {
        const elem = iframeContainerRef.current as HTMLDivElement & {
          requestFullscreen?: () => Promise<void>;
          webkitRequestFullscreen?: () => Promise<void>;
          msRequestFullscreen?: () => Promise<void>;
        };

        // Tentativa com suporte cross-browser
        if (elem.requestFullscreen) {
          elem.requestFullscreen().catch((err) => {
            console.error("Erro no requestFullscreen", err);
          });
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        } else {
          // Fullscreen não suportado, fallback
          window.open(figmaURL, "_blank");
          setShowFigma(false);
        }
      }
    }, 0);
  };

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {!showFigma && <Button onClick={handleOpen}>Figma</Button>}

      {showFigma && (
        <Container ref={iframeContainerRef}>
          {loading && <LoadingOverlay>Loading...</LoadingOverlay>}
          <Iframe src={figmaURL} allowFullScreen onLoad={handleIframeLoad} />
        </Container>
      )}
    </>
  );
};

export default Figma;
