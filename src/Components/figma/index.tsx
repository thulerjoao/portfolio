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
        setLoading(true);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleOpen = () => {
    setShowFigma(true);
    setTimeout(() => {
      if (iframeContainerRef.current) {
        iframeContainerRef.current.requestFullscreen?.().catch((err) => {
          console.error('Erro ao tentar fullscreen:', err);
        });
      }
    }, 0);
  };

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {!showFigma && (
        <Button onClick={handleOpen}>
          Figma
        </Button>
      )}
      {showFigma && (
        <Container ref={iframeContainerRef}>
          {loading && <LoadingOverlay>Loading...</LoadingOverlay>}
          <Iframe
            src={figmaURL}
            allowFullScreen
            onLoad={handleIframeLoad}
          />
        </Container>
      )}
    </>
  );
};

export default Figma;
