"use client";

import { useStore } from "@nanostores/react";
import { $storyOptions, getStoryOptions } from "@/utils/stores";
import type { ReactNode } from "react";

interface Props {
    g: "m" | "f";
    children: ReactNode;
}

function DiffClient({ g, children }: Props) {
    const gender = getStoryOptions("ushio__18TRIP__gender");

    const gFull = g === "f" ? "female" : "male";

    if (gFull !== gender) return null;
    return children;
}

export default DiffClient;
