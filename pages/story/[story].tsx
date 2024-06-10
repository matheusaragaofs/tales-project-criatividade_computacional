import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaRedoAlt,
  FaVolumeMute,
  FaVolumeUp,
} from 'react-icons/fa';
import { storiesBackgrounds360Urls } from '../../config/storiesBackgrounds360Urls';
import { storiesData } from '../../config/storiesData';
type storyType = 'horror' | 'fantasy' | 'action';
import useWindowOrientation from 'use-window-orientation';
import { useMediaQuery } from 'react-responsive';
const StoryPage: React.FC = () => {
  const router = useRouter();

  const { landscape, orientation } = useWindowOrientation();

  const { story } = router.query;
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const audioNarrationRef = useRef<HTMLAudioElement | null>(null);
  const audioBacksoundRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [storyPart, setStoryPart] = useState<number>(0);

  const pages = Object.keys(storiesBackgrounds360Urls['horror']).map((key) =>
    Number(key)
  );
  const firstPage = Math.min(...pages);
  const lastPage = Math.max(...pages);

  const handleNextPage = () => {
    setStoryPart((prevPart) => prevPart + 1);
  };
  const handlePreviousPage = () => {
    setStoryPart((prevPart) => Math.max(prevPart - 1, 0));
  };

  const handleAudioAction = (
    action: 'play' | 'mute',
    audioRef: React.RefObject<HTMLAudioElement>
  ) => {
    if (audioRef.current) {
      if (action === 'play') {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      } else if (action === 'mute') {
        audioRef.current.muted = !audioRef.current.muted;
        setIsMuted(audioRef.current.muted);
      }
    }
  };

  useEffect(() => {
    if (audioNarrationRef.current) {
      audioNarrationRef.current.currentTime = 0;
      audioNarrationRef.current.play();
    }

    if (audioBacksoundRef.current) {
      audioBacksoundRef.current.volume = 0.1;
      audioBacksoundRef.current.play();
    }
  }, [storyPart]);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      {isMobile && !landscape && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          Vire o seu celular para uma melhor experiência!
        </div>
      )}
      <audio
        ref={audioNarrationRef}
        src={`/audios/${story}/narration/${storyPart}.mp3`}
      />
      <audio
        ref={audioBacksoundRef}
        loop
        src={`/audios/${story}/backsound/${storyPart}.mp3`}
      />
      <div
        style={{
          position: 'absolute',
          bottom: isMobile || landscape ? 20 : 30,
          left: 30,
          zIndex: 1,
          fontSize: isMobile || landscape ? 14 : 20,
          fontWeight: 'normal',
          padding: 10,
          borderRadius: 5,
          textAlign: 'center',
          backgroundColor: 'rgba(118, 112, 116, 0.5)',
          color: 'white',
          textShadow: '0 0 2px #8d898b',
        }}
      >
        {storiesData.find((item) => item.story === story)?.title}
      </div>
      <Link href="/">
        <a
          className="hovered-button"
          style={{ position: 'absolute', top: 50, left: 30, zIndex: 1 }}
        >
          <FaArrowLeft
            className="hovered-button"
            style={{
              fontSize: 50,
              cursor: 'pointer',
            }}
            size={isMobile || landscape ? 40 : 80}
          />
        </a>
      </Link>
      <FaRedoAlt
        className="hovered-button"
        onClick={() => {
          handleAudioAction('play', audioNarrationRef);
          handleAudioAction('play', audioBacksoundRef);
        }}
        style={{
          position: 'absolute',
          top: isMobile || landscape ? 130 : 200,
          left: 30,
          zIndex: 1,
          cursor: 'pointer',
        }}
        size={isMobile || landscape ? 40 : 80}
      />
      <div
        onClick={() => {
          handleAudioAction('mute', audioNarrationRef);
          handleAudioAction('mute', audioBacksoundRef);
        }}
        style={{
          position: 'absolute',
          top: isMobile || landscape ? 220 : 350,
          left: 30,
          zIndex: 1,
        }}
      >
        {isMuted ? (
          <FaVolumeMute
            className="hovered-button"
            size={isMobile || landscape ? 40 : 80}
          />
        ) : (
          <FaVolumeUp
            className="hovered-button"
            size={isMobile || landscape ? 40 : 80}
          />
        )}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 50,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            fontSize: 50,
            color: 'white',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}
          >
            {storyPart !== firstPage && (
              <FaArrowLeft
                className="hovered-button"
                style={{
                  marginRight: ![firstPage, lastPage].includes(storyPart)
                    ? 100
                    : 0,
                }}
                size={isMobile || landscape ? 40 : 80}
                onClick={handlePreviousPage}
              />
            )}
            {storyPart !== lastPage && (
              <FaArrowRight
                className="hovered-button"
                onClick={handleNextPage}
                size={isMobile || landscape ? 40 : 80}
              />
            )}
          </div>
        </div>
      </div>
      Story: {story}
      {story && storyPart !== undefined && (
        <iframe
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          width="100%"
          height="640"
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          src={
            storiesBackgrounds360Urls[story as storyType][
              String(storyPart) as never
            ]
          }
        ></iframe>
      )}
    </div>
  );
};

export default StoryPage;
