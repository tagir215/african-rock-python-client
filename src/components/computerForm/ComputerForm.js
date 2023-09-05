import React from "react";
import "./ComputerForm.css";
import { setComputerOS, setComputerType, setComputerTier, setComputerComponents } from '../../redux/ComputerSlice';
import { useDispatch,useSelector } from 'react-redux';

export default function ComputerForm() {
    const dispatch = useDispatch();
    const computerState = useSelector(state => state.computer);

    const handleTypeChange = (event) => {
        const selectedType = event.target.value;
        dispatch(setComputerType(selectedType));
    };
    const handleTierChange = (event) => {
        const selectedTier = event.target.value;
        dispatch(setComputerTier(selectedTier));
    };
    const handleOSChange = (event) => {
        const selectedOS = event.target.value;
        dispatch(setComputerOS(selectedOS));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const queryParams = new URLSearchParams();
        queryParams.append("type",computerState.type);
        queryParams.append("tier",computerState.tier);
        queryParams.append("os",computerState.os);
        window.location.href = `/grid?${queryParams.toString()}`;
    }

    return (
        <form className="computer-form" onSubmit={handleSubmit}>
            <label>Type</label>
            <select onChange={handleTypeChange}>
                <option value="gaming">Gaming</option>
                <option value="basic">Basic</option>
                <option value="work">Work</option>
                <option value="editor">Editor</option>
            </select>
            <label>Tier</label>
            <select onChange={handleTierChange}>
                <option value="budget">Budget</option>
                <option value="mid">Mid</option>
                <option value="high">High</option>
                <option value="enthusiast">Enthusiast</option>
            </select>
            <label>OS</label>
            <select onChange={handleOSChange}>
                <option value="windows">Windows</option>
                <option value="mac">Mac</option>
                <option value="linux">Linux</option>
            </select>
            <button type="submit">Continue</button>
        </form>
    );
}
