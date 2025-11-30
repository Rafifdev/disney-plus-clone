import type { PropsWithChildren } from "react";
import styles from "./index.module.css";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./customSwiper.css";

interface Props {
  title: string;
}

function ScrollableSection(props: PropsWithChildren<Props>) {
  const { title, children } = props;
  return (
    <div style={{ position: "relative" }}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={7.5}
        slidesPerGroup={7}
      >
        {children}
      </Swiper>
    </div>
  );
}

export default ScrollableSection;
