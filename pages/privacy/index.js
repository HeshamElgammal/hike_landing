import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "../../styles/Home.module.css";
import Group10 from "../../public/whatsapp.svg";
import plus from "../../public/plus.svg";
import multi from "../../public/multi.svg";
import privacyData from "../../assets/privacyData";
import termss from "../../assets/terms";

const Privacy = () => {
  const [pivaciesData, setPData] = useState(privacyData);
  const [termsData, setTermsData] = useState(termss);

  const [selectedTab, setSelectedTab] = useState("privacy");
  const toggleItem = (index) => {
    let newP = [...pivaciesData];
    newP[index].selected = !newP[index].selected;
    setPData(newP);
  };
  const toggleTermItem = (index) => {
    let newP = [...termsData];
    newP[index].selected = !newP[index].selected;
    setTermsData(newP);
  };
  const source = useMemo(
    () => (
      <>
        {pivaciesData?.map((item, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderTop: "1px solid #888",
              // borderBottom: "1px solid #555",
              width: "90vw",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginTop: "10px",
              borderLeft: "0",
              borderRight: "0",
            }}
            key={`hello - ${index}`}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "89vw",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingTop: "10px",
                paddingBottom: "10px",
                borderLeft: "0",
                borderRight: "0",
              }}
            >
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: "#555",
                  display: "flex",
                }}
              >
                {item.header}
              </p>
              <Image
                src={item.selected ? multi : plus}
                alt="Vercel Logo"
                width={item.selected?30:20}
                height={item.selected?30:20}
                style={{ display: "flex" }}
                onClick={() => {
                  toggleItem(index);
                }}
              />
            </div>
            {item.selected && (
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#555",
                  display: "flex",
                  textAlign: "center",
                }}
              >
                {item.body}
              </p>
            )}
          </div>
        ))}
      </>
    ),
    [setPData, toggleItem, pivaciesData]
  );
  const terms = useMemo(
    () => (
      <>
        {termsData?.map((item, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderTop: "1px solid #888",
              // borderBottom: "1px solid #555",
              width: "90vw",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginTop: "10px",
              borderLeft: "0",
              borderRight: "0",
            }}
            key={`hello - ${index}`}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "89vw",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingTop: "10px",
                paddingBottom: "10px",
                borderLeft: "0",
                borderRight: "0",
              }}
            >
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: "#555",
                  display: "flex",
                }}
              >
                {item.header}
              </p>
              <Image
                src={item.selected ? multi : plus}
                alt="Vercel Logo"
                width={item.selected?30:20}
                height={item.selected?30:20}
                style={{ display: "flex" }}
                onClick={() => {
                  toggleTermItem(index);
                }}
              />
            </div>
            {item.selected && (
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#555",
                  display: "flex",
                  textAlign: "center",
                }}
              >
                {item.body}
              </p>
            )}
          </div>
        ))}
      </>
    ),
    [setPData, toggleItem, pivaciesData]
  );
  return (
    <>
      <motion.div
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 1,
            },
          },
        }}
      >
        <header
          className={styles.header}
          style={{ backgroundColor: "#fefefe" }}
        >
          <div className={styles.navbar}>
            <p style={{ fontSize: "1.1rem", fontWeight: "500", color: "#000" }}>
              Privacy & Terms
            </p>
            <a
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "-10px",
              }}
              href="https://wa.me/+96181042312"
            >
              <Image
                src={Group10}
                alt="Vercel Logo"
                height={60}
                color="#000"
                style={{
                  backgroundColor: "#28D045",
                  borderRadius: "50%",
                  padding: ".6rem",
                  borderWidth: "3px",
                  borderColor: "#F1F1F1",
                  borderStyle: "solid",
                  marginRight: "1rem",
                }}
                onClick={() => {
                  "whatsapp://send?abid=+961 81 042 312&text=Hello%2C%20World!";
                }}
              />
              <p
                className={styles.titleHeader}
                style={{
                  fontSize: ".8rem",
                  marginTop: "1rem",
                }}
              >
                We are online
              </p>
            </a>
          </div>
        </header>

        <div
          style={{
            width: "85vw",
            alignSelf: "center",
            height: "50px",
            backgroundColor: "#eee",
            marginLeft: "5vw",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "50px",
              backgroundColor: selectedTab == "privacy" ? "#ccc" : "#eee",

              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
            onClick={() => {
              setSelectedTab("privacy");
            }}
          >
            <p
              style={{
                marginTop: ".9rem",
                fontSize: "1.1rem",
                fontWeight: "500",
                color: "#111",
              }}
            >
              Privacy Policy
            </p>
          </div>
          <div
            style={{
              width: "50%",
              height: "50px",
              backgroundColor: selectedTab == "terms" ? "#ccc" : "#eee",
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
            }}
            onClick={() => {
              setSelectedTab("terms");
            }}
          >
            <p
              style={{
                marginTop: ".9rem",
                fontSize: "1.1rem",
                fontWeight: "500",
                color: "#111",
              }}
            >
              Terms & Conditions
            </p>
          </div>
        </div>
        {selectedTab == "privacy" && (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#000",
                    marginBottom: "20px",
                    marginTop: "20px",
                  }}
                >
                  Hike Privacy Policy
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  Last Updated: 30 September 2022
                </p>
              </div>
              <div style={{ width: "90vw" }}>
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  Version Number: 1 This Privacy Policy is an overview of how we
                  collect, use, and process your personal data when you use our
                  website
                  <a href="https://hiketime.me" style={{ color: "#00a" }}>
                    {" "}
                    https://hiketime.me{" "}
                  </a>{" "}
                  (“Website”) and our mobile app (“Hike App”) and email messages
                  that we send to you (jointly called “Services”). If anything,
                  here only applies to one of our services, we’ll explicitly
                  point this out to you. Please read this Policy carefully, as
                  it becomes legally binding when you use our Services. We take
                  privacy and protection of your data very seriously and are
                  committed to handling the personal information of those we
                  engage with, whether customers, suppliers or colleagues
                  responsibly and in a way that meets the legal requirements of
                  the countries in which we operate.
                </p>
              </div>
              {source}
            </div>
          </>
        )}
        {selectedTab == "terms" && (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#000",
                    marginBottom: "20px",
                    marginTop: "20px",
                  }}
                >
                  Customer Agreement (Hike)
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  Last updated: 28 October 2022
                </p>
              </div>
              {terms}
            </div>
          </>
        )}
      </motion.div>
    </>
  );
};

export default Privacy;
