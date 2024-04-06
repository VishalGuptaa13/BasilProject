import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./memory-allocation.module.css";

export type MemoryAllocationType = {
  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const MemoryAllocation: FunctionComponent<MemoryAllocationType> = ({
  propBackgroundColor,
}) => {
  const buttonUnstyledStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.memoryAllocation}>
      <div className={styles.mainButton}>
        <div className={styles.button}>
          <div className={styles.buttonUnstyled} style={buttonUnstyledStyle}>
            <div className={styles.settings}>Refund</div>
            <div className={styles.rightIcon}>
              <div className={styles.icon}>
                <img className={styles.plusIcon} alt="" src="/plus-8.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryAllocation;
