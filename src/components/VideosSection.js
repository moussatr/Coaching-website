import React, { useState, useEffect } from "react";
import axios from "axios";

const VideosSection = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get("/api/videos");
        setVideos(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des vidéos :", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section className="videos-section bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-5">
          Vidéos de formations et de coaching
        </h2>
        <div className="row">
          {videos.map((video, index) => (
            <div key={index} className="col-lg-4 mb-4">
              <div className="card">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    title={video.snippet.title}
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <p className="card-text">{video.snippet.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
