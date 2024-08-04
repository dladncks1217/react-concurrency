import { useRef } from "react";

interface SearchItemProps {
  text: string;
}

const SearchItem = ({ text }: SearchItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  if (ref.current) {
    ref.current.style.animation = "none";
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ref.current.offsetHeight;
    ref.current.style.animation = null!;
    ref.current.dataset.willSet = text;
  }

  const startTime = performance.now();

  while (performance.now() - startTime < 10) {} // cpu burst
  return (
    <div ref={ref} className="texts">
      {text} 변한 내용
      {/* {text} 변한 내용 {"<->" + " "} */}
    </div>
  );
};

export default SearchItem;
