import {useState} from "react";
import './CustomSelect.scss';
export const CustomSelect = ({ options, value, onChange }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (value) => {

        setIsOpen(false);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className="custom-select-container">
            <div
                className={`custom-select ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{value || "Select option"}</span>
                <div className={`arrow ${isOpen ? 'up' : 'down'}`} />
            </div>
            {isOpen && (
                <ul className="custom-options">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={`custom-option ${option.value === value ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};