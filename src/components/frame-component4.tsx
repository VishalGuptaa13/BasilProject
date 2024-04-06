import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./frame-component4.module.css";

export type FrameComponent4Type = {
  uIElementsAndWidgets?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  uIElementsAndWidgets,
  propPadding,
  propMinWidth,
}) => {
  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const uIElementsAnd1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.uiElementsAndWidgetsParent} style={frameDiv4Style}>
      <b className={styles.uiElementsAnd} style={uIElementsAnd1Style}>
        {uIElementsAndWidgets}
      </b>
      <div className={styles.caretUpParent}>
        <img className={styles.caretUpIcon} alt="" src="/caretup.svg" />
        <img className={styles.caretDownIcon} alt="" src="/caretdown.svg" />
      </div>
    </div>
  );
};

export default FrameComponent4;
