import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../public/logo.svg";
import HeroImage from "../public/HeroImage.svg";
import image2 from "../public/image2.svg";
import image4 from "../public/image4.svg";
import Vector2 from "../public/Vector2.svg";
import Group10 from "../public/Group10.svg";
import Vector3 from "../public/Vector3.svg";
import ImageAdv from "../public/Image.svg";
import ImageAdvWhy from "../public/ImageWhy2.svg";
import ri_notification_fill from "../public/ri_notification-fill.svg";
import uim_layer_group from "../public/uim_layer-group.svg";
import uim_schedule from "../public/uim_schedule.svg";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <Image src={logo} alt="Vercel Logo" width={100} height={40} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop:"-10px"
            }}
          >
            <Image
              src={Group10}
              alt="Vercel Logo"
              width={150}
              height={50}
              color="#000"
            />
            <p
            className={styles.titleHeader}
              style={{
                position: "absolute",
                fontSize: ".65rem",
                top: "9px",
                right: "25.5px",
              }}
            >
              We are online
            </p>
          </div>
          {/* <button className={styles.btnHeader}>Download</button> */}
        </div>
      </header>
      {/* <main className={styles.main}>
        <div className={styles.leftHalfSection}>
          <div className={styles.containerLeftSection}>
            <p className={styles.title1InCOntainerLeftSec}>
              Deal & Offers at your finguretips just @Hike
            </p>
            <p className={styles.title2IncontainerLeftSec}>
              Create and organize schedule and task deadline become better, easy
              manage and certainly no longer lagging behind schedule of
              activities and task
            </p>
            <button className={styles.btnDownloadMain}>Download</button>
          </div>
        </div>
        <div className={styles.rightHalfSection1} id="imgc">
          <Image
            src={HeroImage}
            alt="Vercel Logo"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </main> */}
      {/* features */}
      {/* <main className={styles.featuresContainer}>
        <div className={styles.cardContianer}>
          <div className={styles.imgBg}>
            <Image
              src={uim_schedule}
              alt="Vercel card"
              width={80}
              height={30}
            />
          </div>
          <p className={styles.title1Card}>Know Best time for offer!</p>
          <p className={styles.title2Card}>
            You can make your duty deadlines better and more orderly
          </p>
        </div>
        <div className={styles.cardContianer}>
          <div className={styles.imgBg}>
            <Image
              src={uim_layer_group}
              alt="Vercel card"
              width={80}
              height={30}
            />
          </div>
          <p className={styles.title1Card}>Best UI Design App.</p>
          <p className={styles.title2Card}>
            You can manage the deadlines and the schedule becomes easy
          </p>
        </div>
        <div className={styles.cardContianer}>
          <div className={styles.imgBg}>
            <Image
              src={ri_notification_fill}
              alt="Vercel card"
              width={80}
              height={30}
            />
          </div>
          <p className={styles.title1Card}>Notifications on deals!</p>
          <p className={styles.title2Card}>
            Of course you will always get the tasks and schedule notifications
          </p>
        </div>
      </main> */}
      {/* why 1 */}
      {/* <main className={styles.main}>
        <div
          className={styles.leftHalfSection}
          style={{
            backgroundColor: "#E6F8F8",
            overflow: "hidden",
            borderTopRightRadius: "60px",
            borderBottomRightRadius: "60px",
          }}
        >
          <Image
            src={ImageAdv}
            alt="Vercel card"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div
          className={styles.rightHalfSection}
          style={{
            backgroundColor: "#fffff",
            alignItems: "flex-start",
            paddingLeft: "3%",
            height: "100%",
            display: "flex",
          }}
        >
          <div className={styles.containerLeftSection}>
            <p
              className={styles.title1InCOntainerLeftSec}
              style={{ fontSize: "2rem" }}
            >
              Deal & Offers at your finguretips just @Hike
            </p>
            <p className={styles.title2IncontainerLeftSec}>
              Create and organize schedule and task deadline become better, easy
              manage and certainly no longer lagging behind schedule of
              activities and task
            </p>
            <div style={{ flexDirection: "row", width: "100%" }}>
              <button
                className={styles.btnDownloadMain}
                style={{ marginRight: "2%", marginBottom: "2%" }}
              >
                Download
              </button>
              <button className={styles.btnDownloadMain}>Download</button>
            </div>
          </div>
        </div>
      </main> */}
      {/* why 2 */}
      <main className={styles.main} style={{ marginTop: "2vh" }}>
        <div className={styles.leftHalfSection}>
          <div className={styles.containerLeftSection}>
            <p className={styles.title1InCOntainerLeftSec}>
              Stores listing that have heavy discounts.
            </p>
            <p className={styles.title2IncontainerLeftSec}>
              The best feature makes you better, with the latest technology to
              meet your needs. Of course, with such features as organizing
              schedules and leading assignments, it will make you easier, So get
              the application now !
            </p>
            <div style={{ flexDirection: "row", width: "100%" }}>
              <Image
                className={styles.btnDownloadMain}
                src={image2}
                alt="Vercel Logo"
                width={"100%"}
                height={"100%"}
                style={{
                  backgroundColor: "transparent",
                  border: 0,
                  borderRadius: 0,
                }}
              />
              <Image
                className={styles.btnDownloadMain}
                style={{
                  backgroundColor: "transparent",
                  border: 0,
                  borderRadius: 0,
                }}
                src={image4}
                alt="Vercel Logo"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </div>
        <div
          className={styles.rightHalfSection}
          style={{
            backgroundColor: "#E6F8F8",
            overflow: "hidden",
            borderTopLeftRadius: "60px",
            borderBottomLeftRadius: "60px",
          }}
        >
          <Image
            src={ImageAdvWhy}
            alt="Vercel Logo"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </main>
      {/* <main className={styles.containerCenterWhatsCall}>
        <div className={styles.titleContainer}>
          <p className={styles.titleInCWC}>
            Download an app now and the various benefits you will get
            immediately
          </p>
        </div>
        <div className={styles.containerBtnWC}>
          <button
            // className={styles.btnDownloadMain}
            className={styles.btnWhats}
          >
            <Image
              src={Vector2}
              alt="Vercel Logo"
              width={"100%"}
              height={"100%"}
              style={{
                marginRight: "3px",
              }}
            />
            Whatsapp
          </button>
          <button
            // className={styles.}
            className={styles.btnCall}
          >
            <Image
              src={Vector3}
              alt="Vercel Logo"
              width={"100%"}
              height={"100%"}
              style={{
                marginRight: "3px",
              }}
            />
            Call Now
          </button>
        </div>
      </main> */}
      <footer className={styles.footer}>©2022 Hike App</footer>
    </div>
  );
}
