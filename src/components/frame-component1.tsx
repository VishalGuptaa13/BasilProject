import { FunctionComponent } from "react";
import styles from "./frame-component1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.allOrdersParent}>
        <h2 className={styles.allOrders}>All Orders</h2>
        <div className={styles.allOrders1}>All Orders</div>
      </div>
      <div className={styles.div}>/</div>
      <div className={styles.breadcrumb}>Breadcrumb</div>
      <div className={styles.headerRhsWrapper}>
        <div className={styles.headerRhs}>
          <div className={styles.wrapperDivmantineInputWrap}>
            <input className={styles.divmantineInputWrapper} type="text" />
            <img
              className={styles.svgtablerIcon}
              alt=""
              src="/svgtablericon-1.svg"
            />
          </div>
          <div className={styles.logicGateANDWrapper}>
            <div className={styles.logicGateAND}>
              <div className={styles.logicGateOR}>
                <img
                  className={styles.bellIcon}
                  loading="lazy"
                  alt=""
                  src="/bell.svg"
                />
              </div>
              <div className={styles.rightSide}>
                <img
                  className={styles.rightSideChild}
                  loading="lazy"
                  alt=""
                  src="/group-39869@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;
