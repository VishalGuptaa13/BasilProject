import { FunctionComponent } from "react";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import styles from "./orders-list.module.css";
import {Link} from "react-router-dom";

const OrdersList: FunctionComponent = () => {
  return (
    <div className={styles.ordersList}>
      <div className={styles.sidebarCollapsed}>
        <div className={styles.navmantineNavbarRoot}>
          <img
            className={styles.basilBrandStampsPos021}
            loading="lazy"
            alt=""
            src="/basil-brand-stamps-pos02-1@2x.png"
          />
          <div className={styles.iterativeLoop}>
            <div className={styles.divmantineStackRoot}>
              <div className={styles.frameWrapper}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
              </div>
              <div className={styles.frameContainer}>
                <img className={styles.frameIcon1} alt="" src="/frame-1.svg" />
              </div>
              <div className={styles.frameFrame}>
                <img className={styles.frameIcon2} alt="" src="/frame-2.svg" />
              </div>
              <div className={styles.frameDiv}>
                <img className={styles.frameIcon3} alt="" src="/frame-3.svg" />
              </div>
              <div className={styles.frameWrapper1}>
                <img className={styles.frameIcon4} alt="" src="/frame-4.svg" />
              </div>
              <div className={styles.frameWrapper2}>
                <img className={styles.frameIcon5} alt="" src="/frame-5.svg" />
              </div>
              <div className={styles.frameWrapper3}>
                <img className={styles.frameIcon6} alt="" src="/frame-6.svg" />
              </div>
            </div>
            <div className={styles.divmantineStackRoot1}>
              <img className={styles.frameIcon7} alt="" src="/frame-7.svg" />
              <div className={styles.svgtablerIconWrapper}>
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
        <FrameComponent1 />
        <div className={styles.wrapperSearchBoxParent}>
          <div className={styles.wrapperSearchBox}>
            <input className={styles.searchBox} type="text" />
            <img
              className={styles.svgtablerIcon1}
              alt=""
              src="/svgtablericon-1.svg"
            />
          </div>
          <div className={styles.mainButtonParent}>
            <div className={styles.mainButton}>
              <div className={styles.button}>
                <div className={styles.buttonUnstyled}>
                  <div className={styles.leftIcon}>
                    <div className={styles.icon}>
                      <img className={styles.plusIcon} alt="" />
                    </div>
                  </div>
                  <div className={styles.settings}>Add New</div>
                  <div className={styles.rightIcon}>
                    <div className={styles.icon1}>
                      <img className={styles.plusIcon1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.switch}>
              <div className={styles.button1}>
                <div className={styles.buttonUnstyled1}>
                  <img
                    className={styles.alertDialogIcon}
                    alt=""
                    src="/frame-9.svg"
                  />
                  <div className={styles.rightIcon1}>
                    <input className={styles.icon2} type="checkbox" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.switch1}>
              <div className={styles.button2}>
                <div className={styles.buttonUnstyled2}>
                  <img
                    className={styles.frameIcon8}
                    alt=""
                    src="/frame-10.svg"
                  />
                  <div className={styles.rightIcon2}>
                    <input className={styles.icon3} type="checkbox" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper4}>
            <div className={styles.frameWrapper5}>
              <div className={styles.frameGroup}>
                <div className={styles.frameParent1}>
                  <div className={styles.itemTypeParent}>
                    <div className={styles.itemType}>Item Type:</div>
                    <div className={styles.badge}>
                      <div className={styles.badgeUnstyled}>
                        <div className={styles.converted}>Converted</div>
                        <img
                          className={styles.frameIcon9}
                          alt=""
                          src="/frame-11.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.subcategoryParent}>
                    <div className={styles.subcategory}>Subcategory:</div>
                    <div className={styles.badge1}>
                      <div className={styles.badgeUnstyled1}>
                        <div className={styles.fruit}>Fruit</div>
                        <img
                          className={styles.frameIcon10}
                          alt=""
                          src="/frame-11.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.badge2}>
                      <div className={styles.badgeUnstyled2}>
                        <div className={styles.fruit1}>Fruit</div>
                        <img
                          className={styles.frameIcon11}
                          alt=""
                          src="/frame-11.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.badge3}>
                      <div className={styles.badgeUnstyled3}>
                        <div className={styles.fruit2}>Fruit</div>
                        <img
                          className={styles.frameIcon12}
                          alt=""
                          src="/frame-11.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.badge4}>
                      <div className={styles.badgeUnstyled4}>
                        <div className={styles.cup}>cup</div>
                        <img
                          className={styles.frameIcon13}
                          alt=""
                          src="/frame-11.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.badge5}>
                      <div className={styles.badgeUnstyled5}>
                        <div className={styles.cup1}>cup</div>
                        <img
                          className={styles.frameIcon14}
                          alt=""
                          src="/frame-11.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.badge6}>
                      <div className={styles.badgeUnstyled6}>
                        <div className={styles.cup2}>cup</div>
                        <img
                          className={styles.frameIcon15}
                          alt=""
                          src="/frame-11.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.badge7}>
                      <div className={styles.badgeUnstyled7}>
                        <div className={styles.cup3}>cup</div>
                        <img
                          className={styles.frameIcon16}
                          alt=""
                          src="/frame-11.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.itemsInRecipeParent}>
                    <div className={styles.itemsInRecipe}>Items in recipe:</div>
                    <div className={styles.badge8}>
                      <div className={styles.badgeUnstyled8}>
                        <div className={styles.blackPepper}>Black pepper</div>
                        <img
                          className={styles.frameIcon17}
                          alt=""
                          src="/frame-11.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.badge9}>
                      <div className={styles.badgeUnstyled9}>
                        <div className={styles.blackPepper1}>Black pepper</div>
                        <img
                          className={styles.frameIcon18}
                          alt=""
                          src="/frame-11.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.badge10}>
                      <div className={styles.badgeUnstyled10}>
                        <div className={styles.blackPepper2}>Black pepper</div>
                        <img
                          className={styles.frameIcon19}
                          alt=""
                          src="/frame-11.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper6}>
                  <div className={styles.frameWrapper7}>
                    <div className={styles.frameWrapper8}>
                      <div className={styles.badgeParent}>
                        <div className={styles.badge11}>
                          <div className={styles.badgeUnstyled11}>
                            <div className={styles.blackPepper3}>
                              Black pepper
                            </div>
                            <img
                              className={styles.frameIcon20}
                              alt=""
                              src="/frame-11.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.badge12}>
                          <div className={styles.badgeUnstyled12}>
                            <div className={styles.blackPepper4}>
                              Black pepper
                            </div>
                            <img
                              className={styles.frameIcon21}
                              alt=""
                              src="/frame-11.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.badge13}>
                          <div className={styles.badgeUnstyled13}>
                            <div className={styles.blackPepper5}>
                              Black pepper
                            </div>
                            <img
                              className={styles.frameIcon22}
                              alt=""
                              src="/frame-11.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.badge14}>
                          <div className={styles.badgeUnstyled14}>
                            <div className={styles.blackPepper6}>
                              Black pepper
                            </div>
                            <img
                              className={styles.frameIcon23}
                              alt=""
                              src="/frame-11.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.badge15}>
                          <div className={styles.badgeUnstyled15}>
                            <div className={styles.blackPepper7}>
                              Black pepper
                            </div>
                            <img
                              className={styles.frameIcon24}
                              alt=""
                              src="/frame-11.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.badge16}>
                          <div className={styles.badgeUnstyled16}>
                            <div className={styles.blackPepper8}>
                              Black pepper
                            </div>
                            <img
                              className={styles.frameIcon25}
                              alt=""
                              src="/frame-11.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.badge17}>
                          <div className={styles.badgeUnstyled17}>
                            <div className={styles.blackPepper9}>
                              Black pepper
                            </div>
                            <img
                              className={styles.frameIcon26}
                              alt=""
                              src="/frame-11.svg"
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
        <section className={styles.frameSection}>
          <div className={styles.dataProcessorParent}>
            <div className={styles.dataProcessor}>
              <div className={styles.inputFilter}>
                <div className={styles.outputAggregator}>
                  <div className={styles.imageProcessor}>
                    <div className={styles.machines}>Machines:</div>
                    <div className={styles.locationFinder}>
                      <div className={styles.dateHandler}>6</div>
                    </div>
                  </div>
                  <div className={styles.errorHandler}>
                    <div className={styles.ruleEngine}>
                      <div className={styles.orders}>Orders:</div>
                      <div className={styles.aPIConnector}>
                        <div className={styles.div}>28</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.errorHandler1}>
                    <div className={styles.customersParent}>
                      <div className={styles.customers}>Customers:</div>
                      <div className={styles.wrapper}>
                        <div className={styles.div1}>28</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.errorHandler2}>
                    <div className={styles.drinksParent}>
                      <div className={styles.drinks}>Drinks:</div>
                      <div className={styles.container}>
                        <div className={styles.div2}>28</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.userInterface}>
                    <div className={styles.networkManager}>
                      <div className={styles.totalAmount}>Total Amount:</div>
                      <div className={styles.machineLearning}>
                        <img
                          className={styles.aIModelTrainer}
                          alt=""
                          src="/frame-29.svg"
                        />
                        <div className={styles.uiElementsAnd}>25999</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.errorHandler3}>
                    <div className={styles.refundsInitiatedParent}>
                      <div className={styles.refundsInitiated}>
                        Refunds Initiated:
                      </div>
                      <div className={styles.frame}>
                        <div className={styles.div3}>3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.imageRecognition}>
              <div className={styles.objectDetection}>
                <div className={styles.frameParent2}>
                  <div className={styles.speechRecognitionParent}>
                    <div className={styles.speechRecognition}>
                      <div className={styles.speechRecognitionInner}>
                        <img
                          className={styles.frameChild}
                          alt=""
                          src="/frame-46@2x.png"
                        />
                      </div>
                      <div className={styles.sentimentAnalysis}>
                        <b className={styles.uiElementsAnd1}>S.NO.</b>
                      </div>
                    </div>
                    <div className={styles.speechRecognition1}>
                      <div className={styles.speechRecognitionChild}>
                        <img
                          className={styles.frameItem}
                          alt=""
                          src="/frame-46@2x.png"
                        />
                      </div>
                      <div className={styles.uiElementsAndWidgetsWrapper}>
                        <div className={styles.uiElementsAnd2}>1.</div>
                      </div>
                    </div>
                    <div className={styles.speechRecognition2}>
                      <div className={styles.speechRecognitionInner1}>
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/frame-46@2x.png"
                        />
                      </div>
                      <div className={styles.uiElementsAndWidgetsContainer}>
                        <div className={styles.uiElementsAnd3}>2.</div>
                      </div>
                    </div>
                    <div className={styles.speechRecognition3}>
                      <div className={styles.speechRecognitionInner2}>
                        <img
                          className={styles.frameChild1}
                          alt=""
                          src="/frame-46@2x.png"
                        />
                      </div>
                      <div className={styles.uiElementsAndWidgetsFrame}>
                        <div className={styles.uiElementsAnd4}>3.</div>
                      </div>
                    </div>
                    <div className={styles.speechRecognition4}>
                      <div className={styles.speechRecognitionInner3}>
                        <img
                          className={styles.frameChild2}
                          alt=""
                          src="/frame-46@2x.png"
                        />
                      </div>
                      <div className={styles.uiElementsAndWidgetsWrapper1}>
                        <div className={styles.uiElementsAnd5}>4.</div>
                      </div>
                    </div>
                    <div className={styles.speechRecognition5}>
                      <div className={styles.speechRecognitionInner4}>
                        <img
                          className={styles.frameChild3}
                          alt=""
                          src="/frame-46@2x.png"
                        />
                      </div>
                      <div className={styles.uiElementsAndWidgetsWrapper2}>
                        <div className={styles.uiElementsAnd6}>5.</div>
                      </div>
                    </div>
                    <div className={styles.speechRecognition6}>
                      <div className={styles.speechRecognitionInner5}>
                        <img
                          className={styles.frameChild4}
                          alt=""
                          src="/frame-46@2x.png"
                        />
                      </div>
                      <div className={styles.uiElementsAndWidgetsWrapper3}>
                        <div className={styles.uiElementsAnd7}>6.</div>
                      </div>
                    </div>
                    <div className={styles.speechRecognition7}>
                      <div className={styles.speechRecognitionInner6}>
                        <img
                          className={styles.frameChild5}
                          alt=""
                          src="/frame-46@2x.png"
                        />
                      </div>
                      <div className={styles.uiElementsAndWidgetsWrapper4}>
                        <div className={styles.uiElementsAnd8}>7.</div>
                      </div>
                    </div>
                    <div className={styles.speechRecognition8}>
                      <div className={styles.speechRecognitionInner7}>
                        <img
                          className={styles.frameChild6}
                          alt=""
                          src="/frame-46@2x.png"
                        />
                      </div>
                      <div className={styles.uiElementsAndWidgetsWrapper5}>
                        <div className={styles.uiElementsAnd9}>8.</div>
                      </div>
                    </div>
                    <div className={styles.speechRecognition9}>
                      <div className={styles.speechRecognitionInner8}>
                        <img
                          className={styles.frameChild7}
                          alt=""
                          src="/frame-46@2x.png"
                        />
                      </div>
                      <div className={styles.uiElementsAndWidgetsWrapper6}>
                        <div className={styles.uiElementsAnd10}>9.</div>
                      </div>
                    </div>
                    <div className={styles.speechRecognition10}>
                      <div className={styles.speechRecognitionInner9}>
                        <img
                          className={styles.frameChild8}
                          alt=""
                          src="/frame-46@2x.png"
                        />
                      </div>
                      <div className={styles.uiElementsAndWidgetsWrapper7}>
                        <div className={styles.uiElementsAnd11}>10.</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.frameParent4}>
                      <div className={styles.uiElementsAndWidgetsWrapper8}>
                        <b className={styles.uiElementsAnd12}>DATE</b>
                      </div>
                      <div className={styles.caretUpParent}>
                        <img
                          className={styles.caretUpIcon}
                          alt=""
                          src="/caretup.svg"
                        />
                        <img
                          className={styles.caretDownIcon}
                          alt=""
                          src="/caretdown.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.searchEngine}>
                      <div className={styles.uiElementsAnd13}>21 /03/2023</div>
                      <div className={styles.uiElementsAnd14}>13 :58 : 21</div>
                    </div>
                    <div className={styles.searchEngine1}>
                      <div className={styles.uiElementsAnd15}>21 /03/2023</div>
                      <div className={styles.uiElementsAnd16}>13 :57 : 12</div>
                    </div>
                    <div className={styles.searchEngine2}>
                      <div className={styles.uiElementsAnd17}>21 /03/2023</div>
                      <div className={styles.uiElementsAnd18}>13 :56 : 32</div>
                    </div>
                    <div className={styles.searchEngine3}>
                      <div className={styles.uiElementsAnd19}>21 /03/2023</div>
                      <div className={styles.uiElementsAnd20}>13 :54 : 59</div>
                    </div>
                    <div className={styles.searchEngine4}>
                      <div className={styles.uiElementsAnd21}>21 /03/2023</div>
                      <div className={styles.uiElementsAnd22}>13 :54 : 32</div>
                    </div>
                    <div className={styles.searchEngine5}>
                      <div className={styles.uiElementsAnd23}>21 /03/2023</div>
                      <div className={styles.uiElementsAnd24}>13 :43 : 33</div>
                    </div>
                    <div className={styles.searchEngine6}>
                      <div className={styles.uiElementsAnd25}>21 /03/2023</div>
                      <div className={styles.uiElementsAnd26}>13 :38 : 02</div>
                    </div>
                    <div className={styles.searchEngine7}>
                      <div className={styles.uiElementsAnd27}>21 /03/2023</div>
                      <div className={styles.uiElementsAnd28}>13 :30 : 48</div>
                    </div>
                    <div className={styles.searchEngine8}>
                      <div className={styles.uiElementsAnd29}>21 /03/2023</div>
                      <div className={styles.uiElementsAnd30}>13 :30 : 15</div>
                    </div>
                    <div className={styles.searchEngine9}>
                      <div className={styles.uiElementsAnd31}>21 /03/2023</div>
                      <div className={styles.uiElementsAnd32}>13 :28 : 32</div>
                    </div>
                  </div>
                  <div className={styles.frameParent5}>
                    <select className={styles.frameSelect} />
                    <div className={styles.jSONParser}>
                      <div className={styles.uiElementsAnd33}>OD101</div>
                    </div>
                    <div className={styles.jSONParser1}>
                      <div className={styles.uiElementsAnd34}>OD100</div>
                    </div>
                    <div className={styles.jSONParser2}>
                      <div className={styles.uiElementsAnd35}>OD099</div>
                    </div>
                    <div className={styles.jSONParser3}>
                      <div className={styles.uiElementsAnd36}>OD098</div>
                    </div>
                    <div className={styles.jSONParser4}>
                      <div className={styles.uiElementsAnd37}>OD097</div>
                    </div>
                    <div className={styles.jSONParser5}>
                      <div className={styles.uiElementsAnd38}>OD096</div>
                    </div>
                    <div className={styles.jSONParser6}>
                      <div className={styles.uiElementsAnd39}>OD095</div>
                    </div>
                    <div className={styles.jSONParser7}>
                      <div className={styles.uiElementsAnd40}>OD094</div>
                    </div>
                    <div className={styles.jSONParser8}>
                      <div className={styles.uiElementsAnd41}>OD093</div>
                    </div>
                    <div className={styles.jSONParser9}>
                      <div className={styles.uiElementsAnd42}>OD092</div>
                    </div>
                  </div>
                  <div className={styles.frameParent6}>
                    <div className={styles.uiElementsAndWidgetsWrapper9}>
                      <b className={styles.uiElementsAndContainer}>
                        <p className={styles.machine}>MACHINE</p>
                        <p className={styles.name}>NAME</p>
                      </b>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper10}>
                      <div className={styles.uiElementsAndContainer1}>
                        <span>{`Aahaar Stall 23 `}</span>
                        <span className={styles.mi102}>(MI102)</span>
                      </div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper11}>
                      <div className={styles.uiElementsAndContainer2}>
                        <span>{`Aahaar Stall 37 `}</span>
                        <span className={styles.mi103}>(MI103)</span>
                      </div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper12}>
                      <div className={styles.uiElementsAndContainer3}>
                        <span>{`Aahaar Stall 88 `}</span>
                        <span className={styles.mi104}>(MI104)</span>
                      </div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper13}>
                      <div className={styles.uiElementsAndContainer4}>
                        <span>{`Aahaar Stall 88 `}</span>
                        <span className={styles.mi1041}>(MI104)</span>
                      </div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper14}>
                      <div className={styles.uiElementsAndContainer5}>
                        <span>{`Aahaar Stall 88 `}</span>
                        <span className={styles.mi1042}>(MI104)</span>
                      </div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper15}>
                      <div className={styles.uiElementsAndContainer6}>
                        <span>{`Aahaar Stall 88 `}</span>
                        <span className={styles.mi1043}>(MI104)</span>
                      </div>
                    </div>
                    <div className={styles.dataAggregator}>
                      <div className={styles.uiElementsAndContainer7}>
                        <span>{`Aahaar Stall 88 `}</span>
                        <span className={styles.mi1044}>(MI104)</span>
                      </div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper16}>
                      <div className={styles.uiElementsAndContainer8}>
                        <span>{`Aahaar Stall 88 `}</span>
                        <span className={styles.mi1045}>(MI104)</span>
                      </div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper17}>
                      <div className={styles.uiElementsAndContainer9}>
                        <span>{`Aahaar Stall 88 `}</span>
                        <span className={styles.mi1046}>(MI104)</span>
                      </div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper18}>
                      <div className={styles.uiElementsAndContainer10}>
                        <span>{`Aahaar Stall 88 `}</span>
                        <span className={styles.mi1047}>(MI104)</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent7}>
                    <div className={styles.uiElementsAndWidgetsWrapper19}>
                      <b className={styles.uiElementsAnd43}>CUSTOMER NAME</b>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper20}>
                      <div className={styles.uiElementsAnd44}>
                        Simranjeet Kaur
                      </div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper21}>
                      <div className={styles.uiElementsAnd45}>
                        Simranjeet Kaur
                      </div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper22}>
                      <div className={styles.uiElementsAnd46}>
                        Simranjeet Kaur
                      </div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper23}>
                      <div className={styles.uiElementsAnd47}>
                        Simranjeet Kaur
                      </div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper24}>
                      <div className={styles.uiElementsAnd48}>
                        Simranjeet Kaur
                      </div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper25}>
                      <div className={styles.uiElementsAnd49}>
                        Simranjeet Kaur
                      </div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper26}>
                      <div className={styles.uiElementsAnd50}>
                        Simranjeet Kaur
                      </div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper27}>
                      <div className={styles.uiElementsAnd51}>
                        Simranjeet Kaur
                      </div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper28}>
                      <div className={styles.uiElementsAnd52}>
                        Simranjeet Kaur
                      </div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper29}>
                      <div className={styles.uiElementsAnd53}>
                        Simranjeet Kaur
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent8}>
                    <div className={styles.uiElementsAndWidgetsWrapper30}>
                      <b className={styles.uiElementsAnd54}>CONTACT NUMBER</b>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper31}>
                      <div className={styles.uiElementsAnd55}>9999999999</div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper32}>
                      <div className={styles.uiElementsAnd56}>9999999999</div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper33}>
                      <div className={styles.uiElementsAnd57}>9999999999</div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper34}>
                      <div className={styles.uiElementsAnd58}>9999999999</div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper35}>
                      <div className={styles.uiElementsAnd59}>9999999999</div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper36}>
                      <div className={styles.uiElementsAnd60}>9999999999</div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper37}>
                      <div className={styles.uiElementsAnd61}>9999999999</div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper38}>
                      <div className={styles.uiElementsAnd62}>9999999999</div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper39}>
                      <div className={styles.uiElementsAnd63}>9999999999</div>
                    </div>
                    <div className={styles.uiElementsAndWidgetsWrapper40}>
                      <div className={styles.uiElementsAnd64}>9999999999</div>
                    </div>
                  </div>
                  <div className={styles.frameParent9}>
                    <select className={styles.frameChild9} />
                    <FrameComponent uIElementsAndWidgets="199" />
                    <FrameComponent
                      uIElementsAndWidgets="99"
                      propMinWidth="18px"
                    />
                    <FrameComponent
                      uIElementsAndWidgets="298"
                      propMinWidth="26px"
                    />
                    <FrameComponent
                      uIElementsAndWidgets="345"
                      propMinWidth="26px"
                    />
                    <FrameComponent
                      uIElementsAndWidgets="666"
                      propMinWidth="27px"
                    />
                    <FrameComponent
                      uIElementsAndWidgets="765"
                      propMinWidth="25px"
                    />
                    <FrameComponent
                      uIElementsAndWidgets="328"
                      propMinWidth="25px"
                    />
                    <FrameComponent
                      uIElementsAndWidgets="199"
                      propMinWidth="22px"
                    />
                    <FrameComponent
                      uIElementsAndWidgets="199"
                      propMinWidth="22px"
                    />
                    <FrameComponent
                      uIElementsAndWidgets="499"
                      propMinWidth="27px"
                    />
                  </div>
                  <div className={styles.frameParent10}>
                    <div className={styles.uiElementsAndWidgetsWrapper41}>
                      <b className={styles.uiElementsAnd65}>STATUS</b>
                    </div>
                    <div className={styles.divmantineBadgeRootWrapper}>
                      <button className={styles.divmantineBadgeRoot}>
                        <div className={styles.spanmantine1t45alw}>
                          <b><Link className={styles.sucess} to="/orders-filter-view">sucess</Link></b>
                        </div>
                      </button>
                    </div>
                    <div className={styles.divmantineBadgeRootContainer}>
                      <button className={styles.divmantineBadgeRoot1}>
                        <div className={styles.spanmantine1t45alw1}>
                          <b className={styles.failure}>FAILURE</b>
                        </div>
                      </button>
                    </div>
                    <div className={styles.divmantineBadgeRootFrame}>
                      <button className={styles.divmantineBadgeRoot2}>
                        <div className={styles.spanmantine1t45alw2}>
                          <b className={styles.pending}>PENDING</b>
                        </div>
                      </button>
                    </div>
                    <div className={styles.divmantineBadgeRootWrapper1}>
                      <button className={styles.divmantineBadgeRoot3}>
                        <div className={styles.spanmantine1t45alw3}>
                          <b className={styles.sent}>SENT</b>
                        </div>
                      </button>
                    </div>
                    <div className={styles.divmantineBadgeRootWrapper2}>
                      <button className={styles.divmantineBadgeRoot4}>
                        <div className={styles.spanmantine1t45alw4}>
                          <b
                            className={styles.refundInitiated}
                          >{`REFUND INITIATED `}</b>
                        </div>
                      </button>
                    </div>
                    <div className={styles.divmantineBadgeRootWrapper3}>
                      <button className={styles.divmantineBadgeRoot5}>
                        <div className={styles.spanmantine1t45alw5}>
                          <b className={styles.refundCompleted}>
                            REFUND COMPLETED
                          </b>
                        </div>
                      </button>
                    </div>
                    <div className={styles.divmantineBadgeRootWrapper4}>
                      <button className={styles.divmantineBadgeRoot6}>
                        <div className={styles.spanmantine1t45alw6}>
                        <b><Link className={styles.sucess1} to="/orders-filter-view">sucess</Link></b>
                        </div>
                      </button>
                    </div>
                    <div className={styles.divmantineBadgeRootWrapper5}>
                      <button className={styles.divmantineBadgeRoot7}>
                        <div className={styles.spanmantine1t45alw7}>
                        <b><Link className={styles.sucess2} to="/orders-filter-view">sucess</Link></b>
                        </div>
                      </button>
                    </div>
                    <div className={styles.divmantineBadgeRootWrapper6}>
                      <button className={styles.divmantineBadgeRoot8}>
                        <div className={styles.spanmantine1t45alw8}>
                          <b className={styles.sucess3}>sUCESS</b>
                        </div>
                      </button>
                    </div>
                    <div className={styles.divmantineBadgeRootWrapper7}>
                      <button className={styles.divmantineBadgeRoot9}>
                        <div className={styles.spanmantine1t45alw9}>
                          <b className={styles.sucess4}>sUCESS</b>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <footer className={styles.ifElseStatement}>
                <div className={styles.nestedIfStatement}>
                  <div className={styles.uiElementsAnd66}>
                    Showing 1 to 10 of 10 entries
                  </div>
                </div>
                <div className={styles.ifElseStatementInner}>
                  <div className={styles.frameParent11}>
                    <div className={styles.uiElementsAndWidgetsWrapper42}>
                      <div className={styles.uiElementsAnd67}>
                        Rows per page:
                      </div>
                    </div>
                    <div className={styles.paginationItem}>
                      <div className={styles.div4}>10</div>
                      <div className={styles.chevronDownWrapper}>
                        <img
                          className={styles.chevronDownIcon}
                          loading="lazy"
                          alt=""
                          src="/chevrondown.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.pagination}>
                  <div className={styles.paginationItem1}>
                    <div className={styles.icon4}>
                      <img
                        className={styles.chevronsLeftIcon}
                        loading="lazy"
                        alt=""
                        src="/chevronsleft.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.paginationItem2}>
                    <div className={styles.icon5}>
                      <img
                        className={styles.chevronLeftIcon}
                        loading="lazy"
                        alt=""
                        src="/chevronleft.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.paginationItem3}>
                    <div className={styles.group}>
                      <div className={styles.div5}>1</div>
                    </div>
                  </div>
                  <div className={styles.paginationItem4}>
                    <div className={styles.icon6}>
                      <img
                        className={styles.chevronRightIcon}
                        loading="lazy"
                        alt=""
                        src="/chevronright.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.paginationItem5}>
                    <div className={styles.icon7}>
                      <img
                        className={styles.chevronsRightIcon}
                        loading="lazy"
                        alt=""
                        src="/chevronsright.svg"
                      />
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
          <div className={styles.frameWrapper9}>
            <div className={styles.frameParent12}>
              <div className={styles.frameWrapper10}>
                <div className={styles.filtersWrapper}>
                  <b className={styles.filters}>FILTERS</b>
                </div>
              </div>
              <div className={styles.dataGatherer}>
                <div className={styles.shapeCreator}>
                  <select className={styles.button3} />
                  <div className={styles.buttonWrapper}>
                    <div className={styles.button4}>
                      <div className={styles.buttonUnstyled3}>
                        <div className={styles.leftIcon1}>
                          <div className={styles.icon8}>
                            <img
                              className={styles.plusIcon2}
                              alt=""
                              src="/plus-7.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.settings1}>Clear All</div>
                        <div className={styles.rightIcon3}>
                          <div className={styles.icon9}>
                            <img
                              className={styles.plusIcon3}
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
              <div className={styles.circleManager}>
                <div className={styles.dateFrom}>Date From:</div>
                <div className={styles.imageProcessor1}>
                  <div className={styles.chipWrapper}>
                    <div className={styles.chip}>
                      <div className={styles.pathCombiner}>21/03/2022</div>
                      <img
                        className={styles.frameIcon27}
                        alt=""
                        src="/frame-40.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.imageAlignerWrapper}>
                <div className={styles.imageAligner}>
                  <div className={styles.iconHandler}>
                    <div className={styles.dateTo}>Date To:</div>
                  </div>
                  <div className={styles.anchorArranger}>
                    <div className={styles.fillFiller}>
                      <div className={styles.chip1}>
                        <div className={styles.effectsEngine}>21/03/2023</div>
                        <img
                          className={styles.maskMakerIcon}
                          alt=""
                          src="/frame-40.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blendBuilder}>
                <div className={styles.transformManager}>
                  <div className={styles.layoutLayouterParent}>
                    <div className={styles.layoutLayouter}>
                      <div className={styles.status}>Status:</div>
                    </div>
                    <button className={styles.anchorPointSetter}>
                      <div className={styles.guideBuilder}>
                        <div className={styles.chip2}>
                          <div className={styles.success}>Success</div>
                          <img
                            className={styles.styleSheetManager}
                            alt=""
                            src="/frame-40.svg"
                          />
                        </div>
                      </div>
                    </button>
                    <div className={styles.symbolLibrary}>
                      <div className={styles.chip3}>
                        <div className={styles.failure1}>Failure</div>
                        <img
                          className={styles.figmaFileOrganizer}
                          alt=""
                          src="/frame-40.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.workspacesManager}>
                  <div className={styles.canvasComposer}>
                    <button className={styles.versionController}>
                      <div className={styles.collaborationHandler}>
                        <div className={styles.chip4}>
                          <div className={styles.pending1}>Pending</div>
                          <img
                            className={styles.accessibilityCheckerIcon}
                            alt=""
                            src="/frame-40.svg"
                          />
                        </div>
                      </div>
                    </button>
                    <div className={styles.pluginManager}>
                      <div className={styles.chip5}>
                        <div className={styles.refundCompleted1}>
                          Refund Completed
                        </div>
                        <img
                          className={styles.autoLayoutIcon}
                          alt=""
                          src="/frame-40.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.variantsValidator}>
                  <button className={styles.fontFormer}>
                    <div className={styles.iconInputter}>
                      <div className={styles.chip6}>
                        <div className={styles.refundInitiated1}>
                          Refund Initiated
                        </div>
                        <img
                          className={styles.shapeCollectorIcon}
                          alt=""
                          src="/frame-40.svg"
                        />
                      </div>
                    </div>
                  </button>
                  <div className={styles.chipContainer}>
                    <div className={styles.chip7}>
                      <div className={styles.sent1}>Sent</div>
                      <img
                        className={styles.inputFilterIcon}
                        alt=""
                        src="/frame-40.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.outputMerger}>
                <div className={styles.alignmentEngine}>
                  <div className={styles.colorPalette}>
                    <div className={styles.machines1}>Machines:</div>
                  </div>
                  <button className={styles.chip8}>
                    <div className={styles.aahaarStall23}>Aahaar Stall 23</div>
                    <img
                      className={styles.borderStylerIcon}
                      alt=""
                      src="/frame-48.svg"
                    />
                  </button>
                </div>
                <div className={styles.filler}>
                  <button className={styles.chip9}>
                    <div className={styles.aahaarStall37}>Aahaar Stall 37</div>
                    <img
                      className={styles.connectorIcon}
                      alt=""
                      src="/frame-48.svg"
                    />
                  </button>
                  <button className={styles.chip10}>
                    <div className={styles.aahaarStall88}>Aahaar Stall 88</div>
                    <img
                      className={styles.frameIcon28}
                      alt=""
                      src="/frame-48.svg"
                    />
                  </button>
                </div>
                <div className={styles.divider}>
                  <div className={styles.seeMore}>see more</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OrdersList;
