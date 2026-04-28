import SectionButton from "./components/sectionButton";

export default function Home() {
  return (
      <main className="fixed w-full h-full overflow-hidden grid place-items-center bg-wheat">
        <div className="bg-bisque border-15 border-burlywood w-[80vw] h-[85vh] rounded-[30px] flex flex-row">
          <div className="page-left page flex flex-col">
            <div className="flex flex-row-reverse py-[4px] px-5 gap-5">
              <SectionButton />
              <SectionButton />
              <SectionButton />
            </div>
          </div>
          <div className="bg-burlywood w-[8%] h-full"></div>
          <div className="page-right page">

          </div>
        </div>
      </main>
  );
}
