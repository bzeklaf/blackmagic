import { useRef } from "react";
import { useInView } from "framer-motion";


function Section({ children, animation }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  

  return (
    <div ref={ref} className="section">
        <div
        style={{
          transform: isInView ? "none" : animation,
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
      {children}

        </div>
    </div>
  );
}

export default Section;