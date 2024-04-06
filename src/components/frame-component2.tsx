import { FunctionComponent } from "react";
import styles from "./frame-component2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className={styles.logicGateInner}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent}>
              <div className={styles.buttonWrapper}>
                <div className={styles.button}>
                  <div className={styles.buttonUnstyled}>
                    <div className={styles.leftIcon}>
                      <div className={styles.icon}>
                        <img
                          className={styles.plusIcon}
                          alt=""
                          src="/plus-7.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.clearAll}>Clear All</div>
                    <div className={styles.rightIcon}>
                      <div className={styles.icon1}>
                        <img
                          className={styles.plusIcon1}
                          alt=""
                          src="/plus-8.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <div className={styles.button1}>
                  <div className={styles.buttonUnstyled1}>
                    <div className={styles.apply}>Apply</div>
                    <div className={styles.rightIcon1}>
                      <div className={styles.icon2}>
                        <img
                          className={styles.plusIcon2}
                          alt=""
                          src="/plus-8.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
