import { InView } from "react-intersection-observer";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <InView triggerOnce threshold={0.3}>
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className={`${
            inView ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 ease-in-out`}
        >
          {children}
        </div>
      )}
    </InView>
  );
}
