import { InView } from "react-intersection-observer";

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <InView threshold={0.3}>
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className={`${
            inView ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 ease-in-out`}
        >
          {children}
        </div>
      )}
    </InView>
  );
}
