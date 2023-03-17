import { useState, useEffect } from 'react'

import "./DestinyLoader.scss"

const DestinyLoader = () => {

    const initalState = ["warlock"];
    const [count, setCount] = useState(0);
    const classNames = ["warlock", "titan", "hunter", "default"];
    const [guardians, setGuardians] = useState(["warlock"]);
    const [timer, setTimer] = useState(50);

    const changeClass = () => {
        setGuardians(
            guardians.filter((guardian) => guardian !== classNames[count])
        );
        const i = count < classNames.length - 1 ? count + 1 : 0;
        setCount(i);
        //push the i position in guardians array
        setGuardians([...guardians, classNames[i]]);
        //check if guardians has "default" class
        if (guardians.length === 3) {
            setTimer(1000);
        }
        if (i === 0) {
            setGuardians(initalState);
            setTimer(2000);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            changeClass();
        }, timer);
        return () => clearInterval(interval);
    });


    return (
        <div className={`container ${guardians.join(" ")}`}>
            <div className="circle c1"></div>
            <div className="circle c2"></div>
            <div className="circle c3"></div>
            <div className="circle c4"></div>
            <div className="shape_group">
                <div className="shape s1"></div>
                <div className="shape s2"></div>
                <div className="shape s3"></div>
                <div className="shape s4"></div>
                <div className="shape s5"></div>
                <div className="shape s6"></div>
            </div>
            <div className="line_group g1">
                <div className="line l1"></div>
                <div className="line l2"></div>
                <div className="line l3"></div>
                <div className="line l4"></div>
            </div>
            <div className="line_group g2">
                <div className="line l1"></div>
                <div className="line l2"></div>
                <div className="line l3"></div>
                <div className="line l4"></div>
            </div>
            <div className="line_group g3">
                <div className="line l1"></div>
                <div className="line l2"></div>
                <div className="line l3"></div>
                <div className="line l4"></div>
            </div>
        </div>
    )
}

export default DestinyLoader