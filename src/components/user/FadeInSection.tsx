import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div<{
  visible: boolean;
  delay: number;
  direction: string;
}>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};

  transform: ${({ visible, direction }) => {
    if (visible) return "translate(0,0) scale(1)";

    switch (direction) {
      case "left":
        return "translateX(-60px) scale(0.95)";
      case "right":
        return "translateX(60px) scale(0.95)";
      case "up":
      default:
        return "translateY(30px) scale(0.95)"; // ✅ your current behavior
    }
  }};

  transition: all 0.6s ease;
  transition-delay: ${({ delay }) => delay}s;
  will-change: opacity, transform;
`;

export default function FadeInSection({
  children,
  delay = 0,
  direction = "up", // ✅ default = your current animation
}: any) {
  const ref = useRef<any>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper ref={ref} visible={visible} delay={delay} direction={direction}>
      {children}
    </Wrapper>
  );
}
