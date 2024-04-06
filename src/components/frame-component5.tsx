import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./frame-component5.module.css";

export type FrameComponent5Type = {
  sUCESS?: string;

  /** Style props */
  propBorder?: CSSProperties["border"];
  propColor?: CSSProperties["color"];
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  sUCESS,
  propBorder,
  propColor,
}) => {
  const divmantineBadgeRootStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const sUCESSStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.divmantineBadgeRootWrapper}>
      <div
        className={styles.divmantineBadgeRoot}
        style={divmantineBadgeRootStyle}
      >
        <div className={styles.spanmantine1t45alw}>
          <b className={styles.sucess} style={sUCESSStyle}>
            {sUCESS}
          </b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
