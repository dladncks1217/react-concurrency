import { ChangeEvent, useState, useTransition } from "react";
// useDeferredValue
import SearchItem from "./SearchItem";

const App = () => {
  const [text, setText] = useState<string>("");
  const [, startTransition] = useTransition();

  const handleText = (event: ChangeEvent<HTMLInputElement>) =>
    startTransition(() => {
      setText(event.target.value);
    });
  // const handleText = (event: ChangeEvent<HTMLInputElement>) => {
  //   setText(event.target.value);
  // };

  return (
    <>
      <div>
        <fieldset>
          <legend>Block Rendering</legend>
          <input type="text" onChange={handleText} />
        </fieldset>
        <div>{Array(20).fill(<SearchItem text={text} />)}</div>
      </div>
    </>
  );
};

export default App;
