import React from "react";

const WeatherBackgroundVideo = ({ weatherData, day, bgVideo, setBgVideo }) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [bgVideo, videoRef]);

  const backgroundStyles =
    weatherData && bgVideo && !day ? { opacity: "1" } : { opacity: "0" };

  console.log("render bg video component");

  return (
    <>
      <video
        ref={videoRef}
        style={backgroundStyles}
        className="background-video"
        autoPlay
        loop
        muted
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
    </>
  );
};

export default WeatherBackgroundVideo;
