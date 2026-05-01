export default function SummaryPage() {
    return (
        <div className="text-saddlebrown w-full h-full flex flex-col">
            <div className="flex flex-row mt-5 text-2xl justify-around px-[5%] items-center text-burlywood font-bold">
                <button className="text-burlywood font-bold cursor-pointer decoration-3 underline-offset-7 [text-decoration-skip-ink:none]">Daily</button>
                <button className="text-saddlebrown font-bold underline cursor-pointer decoration-3 underline-offset-7 [text-decoration-skip-ink:none]">Weekly</button>
                <button className="text-burlywood font-bold cursor-pointer decoration-3 underline-offset-7 [text-decoration-skip-ink:none]">Overall</button>
            </div>
        </div>
    );
}