import SectionButton from "./components/sectionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faClipboardList, faShop } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
      <main className="fixed w-full h-full overflow-hidden grid place-items-center bg-wheat">
        <div className="bg-bisque border-15 border-burlywood w-[80vw] h-[85vh] rounded-[30px] flex flex-row">
          <div className="page-left page flex flex-col">
            <div className="flex flex-row justify-between py-[4px] px-5 gap-5">
              <h1 className="font-bold text-saddlebrown mt-5 text-4xl flex-1 flex justify-center">
                Summary
              </h1>
              <div className="flex flex-row gap-5">
                <div className="flex flex-row gap-5">
                  <SectionButton icon={faCalendarCheck} /> {/*Daily*/}
                  <SectionButton icon={faClipboardList} /> {/*Summary*/}
                </div>
                <div className="w-[1px] outline-4 outline-saddlebrown h-full bg-saddlebrown rounded-b-full"></div>
                <SectionButton icon={faShop} /> {/*Shop*/}
              </div>
            </div>
            <div className="h-[6px] mt-3 w-full bg-saddlebrown">
              
            </div>
          </div>
          <div className="bg-burlywood w-[8%] h-full"></div>
          <div className="page-right page">
            <div className="flex flex-col h-[75vh] top-[12.5vh] fixed left-[calc(90vw-15px)] gap-[2vh] w-[4vw] justify-around align-end">
              <div className="cursor-pointer w-full h-[30%] bg-bisque rounded-tr-[30px] rounded-br-[30px] border-burlywood border-r-15 border-t-15 border-b-15 flex justify-end items-center flex-nowrap">
                <p className="rotate-90 text-burlywood font-bold text-2xl">Main</p>
              </div>
              <div className="cursor-pointer w-full h-[30%] bg-wheat rounded-tr-[30px] rounded-br-[30px] border-burlywood border-r-15 border-t-15 border-b-15 flex justify-end items-center">
                <p className="rotate-90 text-burlywood font-bold text-2xl -mr-6">Settings</p>
              </div>
              <div className="cursor-pointer w-full h-[30%] bg-wheat rounded-tr-[30px] rounded-br-[30px] border-burlywood border-r-15 border-t-15 border-b-15 flex justify-end items-center">
                <p className="rotate-90 text-burlywood font-bold text-2xl">Help</p>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}
