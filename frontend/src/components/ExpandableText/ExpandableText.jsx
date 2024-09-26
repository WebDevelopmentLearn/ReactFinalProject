import {useState} from "react";
import styles from "./ExpandableText.module.scss";

export const ExpandableText = ({textClass, text, maxHeight = 100 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.expandableTextContainer}>
            <div
                className={`${textClass} ${isExpanded ? styles.expandableText : ""}`}
                style={{ maxHeight: isExpanded ? "100%" : `${maxHeight}px` }}>
                {text}
            </div>
            <button onClick={toggleExpand} className={styles.expandBtn}>
                {isExpanded ? "Hidden" : "Read more"}
            </button>
        </div>
    );
}