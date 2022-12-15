import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import styles from "../../styles/Home.module.css";
import Group10 from "../../public/whatsapp.svg";
import plus from "../../public/plus.svg";
import multi from "../../public/multi.svg";
import { privacyData } from "./privacyData";

const Privacy = () => {
  const [pivaciesData, setPData] = useState(privacyData);
  const toggleItem = (index) => {
    let newP = [...pivaciesData];
    newP[index].selected = !newP[index].selected;
    setPData(newP);
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
              width: "80vw",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginTop: "10px",
              borderLeft: "0",
              borderRight: "0",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "80vw",
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
                width={30}
                height={30}
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
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <p style={{ fontSize: "1.1rem", fontWeight: "500", color: "#000" }}>
            Privacy
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
              height={50}
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
        <div style={{ width: "80vw" }}>
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
            (“Website”) and our mobile app (“Hike App”) and email messages that
            we send to you (jointly called “Services”). If anything, here only
            applies to one of our services, we’ll explicitly point this out to
            you. Please read this Policy carefully, as it becomes legally
            binding when you use our Services. We take privacy and protection of
            your data very seriously and are committed to handling the personal
            information of those we engage with, whether customers, suppliers or
            colleagues responsibly and in a way that meets the legal
            requirements of the countries in which we operate.
          </p>
        </div>
        {source}
      </div>
    </>
  );
};

export default Privacy;
