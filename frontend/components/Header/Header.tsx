/* eslint-disable react/button-has-type */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { Dispatch, SetStateAction } from "react";
import style from "./Header.module.scss";

const Header = ({setActive}: {setActive: Dispatch<SetStateAction<number>>}) => {
  const rightSlide = () => {
    setActive((prev: number) => prev += 1);
  };
  const leftSlide = () => {
    setActive((prev: number) => prev -= 1);
  };
  return (
    <header className={style.header}>
      <h1 className="font-bold text-5xl ">
        Есть всё, что бы наполнить жизнь счастьем
      </h1>
      <div className={style.btnCont}>
        <button onClick={leftSlide}>{"<"}</button>
        <button onClick={rightSlide}>{">"}</button>
      </div>
    </header>
  );
};
export default Header;
