import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {
    const { width, height } = useWindowSize();

    const moveOrb = `@keyframes moveOrb {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(${width}px, ${height / 2}px);
        }
        100% {
            transform: translate(0, 0);
        }
    }`;

    return (
        <div
            className={`w-70vh h-70vh absolute rounded-full -ml-37vh -mt-37vh bg-gradient-to-b from-pink-500 to-orange-500 blur-md animate-orb`}
            style={{ animation: `${moveOrb} 15s alternate linear infinite` }}
        ></div>
    );
}

export default Orb;
