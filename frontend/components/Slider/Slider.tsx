/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import Image from "next/image";

import style from "./Slider.module.scss";

export type TypeData = {
  id: string | number;
  img: string;
  name: string;
  title: string;
}[];
const Slider = ({ data = [], active = 0 }: { data: TypeData, active: number }) => {
  return (
    <section className={style.slideCont}>
      {data?.map((item, index) => {
        return (
          <div className={`${style.slide} ${active === index ? style.active : ""}`} key={item.id}>
            <Image
              className={`${style.img}`}
              width={878}
              height={499}
              src={item.img}
              alt={item.name}
            />
            {
            active === index
              ? (
                <article>
                  <h2>{item.name}</h2>
                  <p>{item.title}</p>
                </article>
              ) : ""
            }
          </div>
        );
      })}
    </section>
  );
};
export default Slider;
