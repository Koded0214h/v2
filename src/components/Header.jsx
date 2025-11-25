import Shuffle from "./react bits/Shuffle";

export default function Header() {
    return (
        <Shuffle
            text="Raufu Abdulrahman"
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
        />
    )
}