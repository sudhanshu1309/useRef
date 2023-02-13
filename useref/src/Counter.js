import { useRef } from "react";

const Counter = () => {
  let refCount = useRef(0);

  const handleClick = () => {
    refCount.current = refCount.current + 1;
    alert("You clicked " + refCount.current + " times!");
  };

  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <p>{refCount.current}</p>
    </>
  );
};

export default Counter;
