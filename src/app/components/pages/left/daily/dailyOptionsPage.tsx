export default function DailyOptionsPage() {

    return (
        <form className="mt-5 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-5">Add a Habit</h1>
            <div className="flex flex-row gap-5 justify-between w-[80%] items-center">
                <label className="font-bold text-xl">Habit</label>
                <input className="font-bold border-3 outline-none border-saddlebrown bg-burlywood focus:border-burlywood rounded-full py-1 px-4 text-center flex-1 focus:bg-wheat focus:scale-[1.05] transition-all duration-300" type="text"></input>
            </div>
        </form>
    );
}