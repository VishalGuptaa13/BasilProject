import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./frame-component3.module.css";

export type FrameComponent3Type = {
  aahaarStall10?: string;
  mI102?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  aahaarStall10,
  mI102,
  propMinWidth,
}) => {
  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/frame-47@2x.png"
        />
      </div>
      <div
        className={styles.uiElementsAndWidgetsWrapper}
        style={frameDiv5Style}
      >
        <div className={styles.uiElementsAndContainer}>
          <span>{aahaarStall10}</span>
          <span className={styles.mi102}>{mI102}</span>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
