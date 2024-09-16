import { useEffect, useState } from "react";
import LanguageSelector from "./LanguageSelector";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [direction, setDirection] = useState("rtl");
  const [loading, setLoading] = useState(true);

  const changeDirection = () => {
    setDirection((prevDirection) => (prevDirection === "rtl" ? "ltr" : "rtl"));
  };

  useEffect(() => {
    setLoading(true);
    let cssFile;

    if (direction === "rtl") {
      cssFile = "/src/styles/css/styles.rtl.css";
    } else {
      cssFile = "/src/styles/css/styles.css";
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssFile;
    document.head.appendChild(link);
    document.documentElement.setAttribute("dir", direction);

    link.onload = () => {
      setLoading(false);
    };

    return () => {
      document.head.removeChild(link);
    };
  }, [direction]);

  return (
    <>
      {!loading && (
        <div className="container py-4">
          <div className="d-flex mb-4">
            <LanguageSelector onChangeDirection={changeDirection} />
          </div>
          {children}
        </div>
      )}
    </>
  );
};

export default Layout;
