"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { useLocalStorage } from "@uidotdev/usehooks";
import { map } from "nanostores";
import { useStore } from "@nanostores/react";
import {
    $storyOptions,
    DEFAULT_STORY_OPTIONS,
    setStoryOptions,
} from "@/utils/stores";

import styles from "./StoryOptions.module.scss";

export default function StoryOptionsDialogue({}: {}) {
    const [open, setOpen] = useState(false);
    const storyOptions = useStore($storyOptions);
    const [firstName, setFirstName] = useState(
        storyOptions.ushio__18TRIP__firstName
    );
    const [lastName, setLastName] = useState(
        storyOptions.ushio__18TRIP__lastName
    );
    const [gender, setGender] = useState(storyOptions.ushio__18TRIP__gender);

    console.log("SP", storyOptions);
    return (
        <Dialog.Root open={open} onOpenChange={(o) => setOpen(o)}>
            <Dialog.Trigger asChild>
                <button
                    className={styles.StoryOptionsButton}
                    aria-label="Edit profile"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    </svg>
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.DialogOverlay} />
                <Dialog.Content className={styles.DialogContent}>
                    <Dialog.Title className={styles.DialogTitle}>
                        Edit profile
                    </Dialog.Title>
                    <Dialog.Description className={styles.DialogDescription}>
                        Make changes to your profile here. Click save when
                        you're done.
                    </Dialog.Description>

                    <form
                        onSubmit={(event) => {
                            setStoryOptions(
                                "ushio__18TRIP__firstName",
                                firstName
                            );
                            setStoryOptions(
                                "ushio__18TRIP__lastName",
                                lastName
                            );
                            setStoryOptions("ushio__18TRIP__gender", gender);
                            setOpen(false);
                            event.preventDefault();
                        }}
                    >
                        <fieldset className={styles.Fieldset}>
                            <label className={styles.Label} htmlFor="firstname">
                                First Name
                            </label>
                            <input
                                className={styles.Input}
                                id="firstname"
                                defaultValue={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                            />
                        </fieldset>
                        <fieldset className={styles.Fieldset}>
                            <label className={styles.Label} htmlFor="lastname">
                                Last Name
                            </label>
                            <input
                                className={styles.Input}
                                id="lastname"
                                defaultValue={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                            />
                        </fieldset>
                        <fieldset className={styles.Fieldset}>
                            <label className={styles.Label} htmlFor="gender">
                                Gender
                            </label>
                            <select
                                className={styles.Input}
                                id="gender"
                                defaultValue={gender}
                                onChange={(e) => {
                                    if (
                                        e.target.value !== "male" &&
                                        e.target.value !== "female"
                                    )
                                        return;
                                    setGender(e.target.value);
                                }}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </fieldset>
                        <div
                            style={{
                                display: "flex",
                                marginTop: 25,
                                justifyContent: "flex-end",
                            }}
                        >
                            <button
                                type="submit"
                                className={`${styles.Button} ${styles.green}`}
                            >
                                Save changes
                            </button>
                        </div>
                    </form>

                    <Dialog.Close asChild>
                        <button
                            className={styles.IconButton}
                            aria-label="Close"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M18 6l-12 12" />
                                <path d="M6 6l12 12" />
                            </svg>
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
