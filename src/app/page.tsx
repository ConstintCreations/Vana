"use client";
import SectionButton from "./components/sectionButton";
import TabButton from "./components/tabButton";
import { faCalendarCheck, faClipboardList, faShop } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {

  const [section, setSection] = useState<"Daily" | "Summary" | "Shop">("Daily");
  const [tab, setTab] = useState<"Main" | "Options" | "Help">("Main");

  return (
      <main className="fixed w-full h-full overflow-hidden grid place-items-center bg-wheat">
        <div className="bg-bisque border-15 border-burlywood w-[80vw] h-[85vh] rounded-[30px] flex flex-row">
          <div className="page-left page flex flex-col">
            <div className="flex flex-row justify-between py-[4px] px-5 gap-5">
              <h1 className="font-bold text-saddlebrown mt-5 text-4xl flex-1 flex justify-center">
                {section}
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
              <TabButton text={section} onClick={() => {setTab("Main")}} selected={tab == "Main"} ></TabButton>
              <TabButton text="Options" onClick={() => {setTab("Options")}} selected={tab == "Options"}></TabButton>
              <TabButton text="Help" onClick={() => {setTab("Help")}} selected={tab == "Help"}></TabButton>
            </div>
          </div>
        </div>
      </main>
  );
}
