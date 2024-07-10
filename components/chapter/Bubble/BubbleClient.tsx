import styles from "./Bubble.module.scss";
import type { ReactNode } from "react";
import { getStoryOptions } from "@/utils/stores";
type CharacterBubbleProps = {
    children: ReactNode;
    character: string;
    name?: string;
    hidden?: boolean;
    unknown?: boolean;
    hologram?: boolean;
    shake?: boolean;
};
type MCBubbleProps = {
    children: ReactNode;
    mc: true;
};
type Props = CharacterBubbleProps | MCBubbleProps;

function BubbleClient({ children, ...props }: Props) {
    const firstname = getStoryOptions("ushio__18TRIP__firstName");
    const gender = getStoryOptions("ushio__18TRIP__gender");
    if ("mc" in props) {
        return (
            <div
                className={styles.bubble}
                data-character={gender === "male" ? "Kaede" : "Momiji"}
            >
                <div className={styles.icon__wrapper}>
                    <div className={styles.icon__box}>
                        <div className={styles.icon__base} />
                    </div>
                </div>
                <div className={styles.lines}>
                    <div className={styles.name}>
                        <strong>{firstname || "MC"}</strong>
                    </div>
                    {children}
                </div>
            </div>
        );
    }
    const { character, name, hidden, unknown, hologram, shake } = props;
    return (
        <div
            className={`${styles.bubble}${
                hologram ? ` ${styles.hologram}` : ""
            }${shake ? ` ${styles.shake}` : ""}${
                hidden ? ` ${styles.hidden}` : ""
            }${unknown ? ` ${styles.unknown}` : ""}`}
            data-character={character}
        >
            <div className={styles.icon__wrapper}>
                <div className={styles.icon__box}>
                    <div className={styles.icon__base} />
                </div>
            </div>
            <div className={styles.lines}>
                <div className={styles.name}>
                    <b>{unknown ? "???" : name || character}</b>
                </div>
                {children}
            </div>
        </div>
    );
}

export default BubbleClient;
