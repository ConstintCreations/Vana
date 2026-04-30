"use client";
import SectionButton from "./components/sectionButton";
import TabButton from "./components/tabButton";
import { faCalendarCheck, faClipboardList, faShop } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {

  const [section, setSection] = useState<"Daily" | "Summary" | "Shop">("Daily");
  const [tab, setTab] = useState<"Main" | "Options" | "Help">("Main");

  const [transition, setTransition] = useState<Boolean>(false);

  function tabChange(newTab: "Main" | "Options" | "Help") {
    if (tab == newTab) return;
    if (tab != "Main") {
      setTransition(true);
    }
    setTab(newTab);
    setTimeout(() => {setTransition(false)}, 0);
  }

  return (
      <main className="fixed w-full h-full overflow-hidden grid place-items-center bg-wheat">
        <div className="bg-bisque border-15 border-burlywood w-[80vw] h-[85vh] rounded-[30px] flex flex-row">
          <div className="page-left page flex flex-col">
            <div className="flex flex-row justify-between py-[4px] px-5 gap-5">
              <h1 className="font-bold text-saddlebrown items-center h-full text-4xl flex-1 flex justify-center">
                <div className="flex flex-col w-full h-full justify-center items-center relative">
                  <span className={`text-lg text-burlywood ${transition ? "transition" : ""} w-full justify-self-start align-self-start absolute top-0 left-0 tabButton ${tab.toLowerCase()}`}>{tab == "Main" ? "" : tab}</span><p className="mt-4">{section}</p>
                </div>
              </h1>
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-5">
                  <SectionButton icon={faCalendarCheck} onClick={() => {setSection("Daily"); setTab("Main")}} selected={section == "Daily"} /> {/*Daily*/}
                  <SectionButton icon={faClipboardList} onClick={() => {setSection("Summary"); setTab("Main")}} selected={section == "Summary"} /> {/*Summary*/}
                </div>
                <div className="w-[1px] outline-4 outline-saddlebrown h-full bg-saddlebrown rounded-b-full"></div>
                <SectionButton icon={faShop} onClick={() => {setSection("Shop"); setTab("Main")}} selected={section == "Shop"} /> {/*Shop*/}
              </div>
            </div>
            <div className="h-[6px] mt-3 w-full bg-saddlebrown">
              
            </div>
          </div>
          <div className="bg-burlywood w-[8%] h-full"></div>
          <div className="page-right page">
            <div className="flex flex-col h-[75vh] top-[12.5vh] fixed left-[calc(90vw-15px)] gap-[2vh] w-[4vw] justify-around align-end">
              <TabButton text={section} onClick={() => {tabChange("Main")}} selected={tab == "Main"} ></TabButton>
              <TabButton text="Options" onClick={() => {tabChange("Options")}} selected={tab == "Options"}></TabButton>
              <TabButton text="Help" onClick={() => {tabChange("Help")}} selected={tab == "Help"}></TabButton>
            </div>
          </div>
        </div>
      </main>
  );
}
