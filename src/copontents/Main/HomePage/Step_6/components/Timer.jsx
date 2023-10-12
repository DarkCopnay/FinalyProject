import { useState, useEffect } from "react"

export default function Timer() {
    const [hours, setHours] = useState(5);
    const [minutes, setMinutes] = useState(50);
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        const TimerInterval = setInterval(function() {
            setSeconds(seconds - 1);
            if (seconds === 0) {
                setSeconds(59);
                setMinutes(minutes - 1)

                if (minutes === 0) {
                    setMinutes(59)
                    setHours(hours - 1);
                }
            }

            if (hours === 0 && minutes === 0 && seconds === 0) {
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            }
        }, 1000)

        return () => clearInterval(TimerInterval);
    }, [hours, minutes, seconds])

    return (
        <section className="step_6_content_timer">
                <h4>Auction ends in:</h4>
            <section className="step_6_content_timer_content">
                <section id="hours">
                    <h2>{hours}</h2>
                    <h4>Hours</h4>
                </section>
                <span>:</span>
                <section id="minutes">
                        <h2>{minutes}</h2>
                        <h4>Minutes</h4>
                </section>
                <span>:</span>
                <section id="seconds">
                        <h2>{seconds}</h2>
                        <h4>Seconds</h4>
                </section>
            </section>
        </section>
    )
}