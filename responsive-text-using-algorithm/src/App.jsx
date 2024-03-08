import { useRef, useEffect } from "react";

function App() {

  const containerRef = useRef(null);
  const textRef = useRef(null);

  const resizeText = () => {
    let container = containerRef.current;
    let text = textRef.current;

    const containerWidth = container.offsetWidth;

    let min = 1;
    let max = 2000;

    while (min <= max) {
      let mid = Math.floor((min + max) / 2);
      console.log(mid);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
    text.style.fontSize = max + "px";
  };

  useEffect(() => {
    resizeText();
  }, []);

  return (
    <div ref={containerRef}>
      <p ref={textRef}>what is react hooks, component, and props. tell your journey</p>

    </div>
  );
}

export default App;
