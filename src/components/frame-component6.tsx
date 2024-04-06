import { FunctionComponent } from "react";
import styles from "./frame-component6.module.css";

const FrameComponent6: FunctionComponent = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.od101Parent}>
        <div className={styles.od101}>OD101</div>
        <nav className={styles.image}>
          <div className={styles.allOrders}>All Orders</div>
          <div className={styles.div}>/</div>
          <div className={styles.od1011}>OD101</div>
        </nav>
      </div>
      <div className={styles.div1}>/</div>
      <div className={styles.breadcrumb}>Breadcrumb</div>
      <div className={styles.grid}>
        <div className={styles.headerRhs}>
          <div className={styles.divmantineInputWrapper}>
            <div className={styles.inputmantineJo5gy325p}>
              <div className={styles.divplaceholder}>
                <div className={styles.search}>Search</div>
              </div>
            </div>
            <img
              className={styles.svgtablerIcon}
              alt=""
              src="/svgtablericon-1.svg"
            />
          </div>
          <div className={styles.star}>
            <div className={styles.plus}>
              <div className={styles.minus}>
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

export default FrameComponent6;
