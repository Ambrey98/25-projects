import { useEffect, useState } from "react";
import "./ScrollIndicatorMain.scss";

export default function ScrollIndicatorMain() {
  const url = "https://dummyjson.com/products?limit=40&skip=0&select=title";
  const [data, setData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState<any>();
  // const [maxScrollYValue, setMaxScrollYValue] = useState<number>();
  const maxScrollYValue =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);

      if (response.ok) {
        const responseData = await response.json();
        setData(responseData.products);
        console.log(responseData);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Custom Scroll Indicator</h1>
        <div className="progress-bar">
          <div
            className="progress-bar__inner"
            style={{
              width:
                scrollPosition &&
                maxScrollYValue &&
                (scrollPosition / maxScrollYValue) * 100 + "%",
            }}
          ></div>
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {!loading && data && data.length > 0 && (
        <ul>
          {data.map((product: any) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
