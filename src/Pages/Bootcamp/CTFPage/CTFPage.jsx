import React from "react";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import styles from "./CTFPage.module.css";

const CTFPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.main_container}>
        <div className={styles.first_view_container}>
          <div className={styles.first_view}>
            <div className={styles.fv_texts}>
              <p className={styles.fv_heading}>
                <span> Intro </span> to CTF
              </p>
              <p className={styles.fv_subheading}>5 Days Hands On Bootcamp</p>
              <p className={styles.fv_content}>
                Pentesting is a hard thing. It's even harder to figure out how
                to get started on this journey. This workshop is aimed toward
                absolute begineers and to give them an easy understanding
                learning path.
                <br />
                <br />
                We are focused on cracking OSCP like Kioptrix Kioptrix
                boot-to-root VMs are well known as a good starting vulnerable
                machines for hacking challenges. This is especially true for
                those who are looking to pursue the OSCP certification, as it is
                considered to be beginner-friendly
              </p>
              <button className={styles.register}>Starting Soon!</button>
            </div>
            <div className={styles.fv_image}>
              <img
                src="/assets/bootcamp/ctf/fvimg.gif"
                alt=""
                className={styles.fv_img}
              />
            </div>
          </div>
        </div>
        <div className={styles.second_view_container}>
          <div className={styles.second_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>
                Getting <span> Started</span>
              </p>
              <p className={styles.sv_content}>
                This workshop is divided into 2 parts. The learning section and
                the challenge section
              </p>
            </div>
            <div className={styles.sv_sections}>
              <div className={styles.sv_section_one}>
                <div className={styles.svs_texts}>
                  <p className={styles.section_preheading}>ONLINE</p>
                  <p className={styles.section_heading}>Part One</p>
                </div>
                <div className={styles.svs_boxes}>
                  <div className={styles.svs_box}>
                    <p className={styles.box_header}>Day 01</p>
                    <ul>
                      <li>Introduction to Fundamentals of Cyber Security.</li>
                    </ul>
                  </div>
                  <div className={styles.svs_box}>
                    <p className={styles.box_header}>Day 02</p>
                    <ul>
                      <li>Linux OS Basics</li>
                      <li>Introduction to Netowrk</li>
                    </ul>
                  </div>
                  <div className={styles.svs_box}>
                    <p className={styles.box_header}>Day 03</p>
                    <ul>
                      <li>Introduction to Network</li>
                      <li>5 Stages of Hacking</li>
                    </ul>
                  </div>
                  <div className={styles.svs_box}>
                    <p className={styles.box_header}>Day 04</p>
                    <ul>
                      <li>5 Stages of Hacking</li>
                    </ul>
                  </div>
                  <div className={styles.svs_box}>
                    <p className={styles.box_header}>Day 05</p>
                    <ul>
                      <li>Exploitation Basics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.sv_section_second}>
                <div className={styles.svs_texts}>
                  <p className={styles.section_preheading}>OFFLINE</p>
                  <p className={styles.section_heading}>Part Two</p>
                </div>
                <div className={styles.svs_boxes}>
                  <div className={styles.svs_box}>
                    <p className={styles.box_header}>Challenge</p>
                    <ul>
                      <li>CTF Challenge</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.third_view_container}>
          <div className={styles.third_view}>
            <div className={styles.sv_texts}>
              <p className={styles.sv_heading}>
                Detailed <span> Plan Structure</span>
              </p>
              <p className={styles.sv_content}>
                Shown below are the detailed plan structure for each day. Click
                above cards to view the plan for each day.
              </p>
            </div>
            <div className={styles.tv_plan_structures}>
              <p className={styles.plan_header}>
                Workshop <span>Plan</span>
              </p>
              <p className={styles.plan_day}>Day 1</p>
              <div className={styles.tv_plan_structure}>
                <div className={styles.detailed_structure}>
                  <p className={styles.plan_title}>
                    Online /Introduction to Fundamentals of Cyber Security
                  </p>
                  <div className={styles.topics}>
                    <div className={styles.topic}>
                      <span className={styles.topic_number}>01</span>
                      <div>
                        <p className={styles.topic_title}>
                          {" "}
                          Cyber Secruity, a walk-through
                        </p>
                        <p className={styles.topic_subtitle}>
                          Intro to Cyber World & Cyber Security
                        </p>
                      </div>
                    </div>
                    <div className={styles.topic}>
                      <span className={styles.topic_number}>01</span>
                      <div>
                        <p className={styles.topic_title}>
                          {" "}
                          Cyber Secruity, a walk-through
                        </p>
                        <p className={styles.topic_subtitle}>
                          Intro to Cyber World & Cyber Security
                        </p>
                      </div>
                    </div>
                    <div className={styles.topic}>
                      <span className={styles.topic_number}>01</span>
                      <div>
                        <p className={styles.topic_title}>
                          {" "}
                          Cyber Secruity, a walk-through
                        </p>
                        <p className={styles.topic_subtitle}>
                          Intro to Cyber World & Cyber Security
                        </p>
                      </div>
                    </div>
                    <div className={styles.topic}>
                      <span className={styles.topic_number}>01</span>
                      <div>
                        <p className={styles.topic_title}>
                          {" "}
                          Cyber Secruity, a walk-through
                        </p>
                        <p className={styles.topic_subtitle}>
                          Intro to Cyber World & Cyber Security
                        </p>
                      </div>
                    </div>
                    <div className={styles.topic}>
                      <span className={styles.topic_number}>01</span>
                      <div>
                        <p className={styles.topic_title}>
                          {" "}
                          Cyber Secruity, a walk-through
                        </p>
                        <p className={styles.topic_subtitle}>
                          Intro to Cyber World & Cyber Security
                        </p>
                      </div>
                    </div>
                    <div className={styles.topic}>
                      <span className={styles.topic_number}>01</span>
                      <div>
                        <p className={styles.topic_title}>
                          {" "}
                          Cyber Secruity, a walk-through
                        </p>
                        <p className={styles.topic_subtitle}>
                          Intro to Cyber World & Cyber Security
                        </p>
                      </div>
                    </div>
                    <div className={styles.topic}>
                      <span className={styles.topic_number}>01</span>
                      <div>
                        <p className={styles.topic_title}>
                          {" "}
                          Cyber Secruity, a walk-through
                        </p>
                        <p className={styles.topic_subtitle}>
                          Intro to Cyber World & Cyber Security
                        </p>
                      </div>
                    </div>
                    <div className={styles.topic}>
                      <span className={styles.topic_number}>01</span>
                      <div>
                        <p className={styles.topic_title}>
                          {" "}
                          Cyber Secruity, a walk-through
                        </p>
                        <p className={styles.topic_subtitle}>
                          Intro to Cyber World & Cyber Security
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CTFPage;
