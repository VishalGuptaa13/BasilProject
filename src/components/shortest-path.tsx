import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./shortest-path.module.css";

export type ShortestPathType = {
  cUP?: string;
  pOSITION?: string;
  frame1?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propWidth2?: CSSProperties["width"];
};

const ShortestPath: FunctionComponent<ShortestPathType> = ({
  cUP,
  pOSITION,
  frame1,
  propPadding,
  propAlignSelf,
  propWidth,
  propAlignSelf1,
  propWidth1,
  propAlignSelf2,
  propWidth2,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth1,
    };
  }, [propAlignSelf1, propWidth1]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      width: propWidth2,
    };
  }, [propAlignSelf2, propWidth2]);

  return (
    <div className={styles.shortestPath}>
      <div className={styles.uiElementsAndWidgetsWrapper} style={frameDivStyle}>
        <b className={styles.uiElementsAndContainer}>
          <p className={styles.cup}>{cUP}</p>
          <p className={styles.position}>{pOSITION}</p>
        </b>
      </div>
      <div className={styles.frameWrapper} style={frameDiv1Style}>
        <img className={styles.frameIcon} alt="" src="/frame-31.svg" />
      </div>
      <div className={styles.frameContainer} style={frameDiv2Style}>
        <img className={styles.frameIcon1} alt="" src={frame1} />
      </div>
      <div className={styles.frameFrame} style={frameDiv3Style}>
        <img className={styles.frameIcon2} alt="" src="/frame-31.svg" />
      </div>
    </div>
  );
};

export default ShortestPath;
