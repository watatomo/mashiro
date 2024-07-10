import styles from "./Narration.module.scss";
import type { ReactNode } from "react";

function Narration({ children }: {children: ReactNode}) {
    return (
        <div className={styles.narration}>
            <div className={styles.lines}>
                    {children}
            </div>
        </div>
    );
}

export default Narration;
