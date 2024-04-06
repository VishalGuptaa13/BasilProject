import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./output-formater.module.css";

export type OutputFormaterType = {
  loopStructure?: string;
  uIElementsAndWidgets?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const OutputFormater: FunctionComponent<OutputFormaterType> = ({
  loopStructure,
  uIElementsAndWidgets,
  propPadding,
  propMinWidth,
}) => {
  const conditionalStatementStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const uIElementsAnd2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.outputFormater}>
      <div className={styles.functionCall}>
        <img
          className={styles.loopStructureIcon}
          loading="lazy"
          alt=""
          src={loopStructure}
        />
      </div>
      <div
        className={styles.conditionalStatement}
        style={conditionalStatementStyle}
      >
        <div className={styles.uiElementsAnd} style={uIElementsAnd2Style}>
          {uIElementsAndWidgets}
        </div>
      </div>
    </div>
  );
};

export default OutputFormater;
