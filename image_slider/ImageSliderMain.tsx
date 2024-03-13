import { useEffect, useState } from "react";
import "./ImageSliderMain.scss";

export default function ImageSliderMain() {
  const limit = 7;
  const APIUrl = `https://picsum.photos/v2/list?page=1&limit=${limit}`;

  const [images, setImages] = useState<any[]>();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(APIUrl, {});
      const imagesResult = await response.json();

      if (imagesResult) {
        setImages(imagesResult);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [limit, APIUrl]);

  return (
    <div className="slider-container">
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="img-container">
          <img
            className="displayed-img"
            src={images && images[currentSlide]["download_url"]}
            alt=""
          />
          <button
            className="btn btn-left"
            onClick={() =>
              currentSlide > 0 && setCurrentSlide(currentSlide - 1)
            }
          >
            L
          </button>
          <button
            className="btn btn-right"
            onClick={() =>
              currentSlide < limit - 1 && setCurrentSlide(currentSlide + 1)
            }
          >
            R
          </button>
          <div
            className="slider-container"
            style={{ left: `${375 - limit * 25}px` }}
          >
            {[...Array(limit)].map((_, id) => {
              return (
                <span
                  className={`slider-circle ${
                    currentSlide === id ? "active" : "inactive"
                  }`}
                  style={{ left: 50 * id }}
                  key={id}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
