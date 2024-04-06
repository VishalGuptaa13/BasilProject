import { FunctionComponent } from "react";
import FrameComponent6 from "../components/frame-component6";
import GreaterThan from "../components/greater-than";
import Table from "../components/table";
import styles from "./orders-detailed-view.module.css";

const OrdersDetailedView: FunctionComponent = () => {
  return (
    <div className={styles.ordersDetailedView}>
      <div className={styles.sidebarCollapsed}>
        <div className={styles.navmantineNavbarRoot}>
          <img
            className={styles.basilBrandStampsPos021}
            loading="lazy"
            alt=""
            src="/basil-brand-stamps-pos02-1@2x.png"
          />
          <div className={styles.listItem}>
            <div className={styles.divmantineStackRoot}>
              <div className={styles.inputBox}>
                <img
                  className={styles.outputBoxIcon}
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
              </div>
              <div className={styles.inputBox1}>
                <img className={styles.frameIcon} alt="" src="/frame-1.svg" />
              </div>
              <div className={styles.inputBox2}>
                <img className={styles.frameIcon1} alt="" src="/frame-2.svg" />
              </div>
              <div className={styles.inputBox3}>
                <img className={styles.frameIcon2} alt="" src="/frame-3.svg" />
              </div>
              <div className={styles.inputBox4}>
                <img className={styles.frameIcon3} alt="" src="/frame-4.svg" />
              </div>
              <div className={styles.inputBox5}>
                <img className={styles.frameIcon4} alt="" src="/frame-5.svg" />
              </div>
              <div className={styles.inputBox6}>
                <img className={styles.frameIcon5} alt="" src="/frame-6.svg" />
              </div>
            </div>
            <div className={styles.divmantineStackRoot1}>
              <img className={styles.frameIcon6} alt="" src="/frame-7.svg" />
              <div className={styles.divider}>
                <img
                  className={styles.svgtablerIcon}
                  loading="lazy"
                  alt=""
                  src="/svgtablericon.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className={styles.frameParent}>
        <FrameComponent6 />
        <GreaterThan />
        <section className={styles.horizontalRule}>
          <Table />
        </section>
      </main>
    </div>
  );
};

export default OrdersDetailedView;
