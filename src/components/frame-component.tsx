import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  uIElementsAndWidgets?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  uIElementsAndWidgets,
  propMinWidth,
}) => {
  const uIElementsAndStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <img className={styles.frameIcon} alt="" src="/frame-29.svg" />
        <div className={styles.uiElementsAnd} style={uIElementsAndStyle}>
          {uIElementsAndWidgets}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
