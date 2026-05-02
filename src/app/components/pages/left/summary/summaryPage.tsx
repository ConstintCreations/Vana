"use client";
import SummaryTypeButton from "../../../summaryTypeButton";
import { useState } from "react";

export default function SummaryPage() {
    const [summaryType, setSummaryType] = useState<"Daily" | "Weekly" | "Overall">("Daily");

    return (
        <div className="text-saddlebrown w-full h-full flex flex-col">
            <div className="flex flex-row mt-5 justify-around px-[5%] items-center text-burlywood font-bold">
                <SummaryTypeButton text={"Daily"} selected={summaryType == "Daily"} onClick={() => {setSummaryType("Daily")}}></SummaryTypeButton>
                <SummaryTypeButton text={"Weekly"} selected={summaryType == "Weekly"} onClick={() => {setSummaryType("Weekly")}}></SummaryTypeButton>
                <SummaryTypeButton text={"Overall"} selected={summaryType == "Overall"} onClick={() => {setSummaryType("Overall")}}></SummaryTypeButton>
            </div>
        </div>
    );
}