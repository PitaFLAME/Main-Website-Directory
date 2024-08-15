import { getAccent } from "./Globals";

const data = [
    (   // Git Logo
        <svg key={0} className={`${getAccent(3, 'fill')}`} 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180.11 260.53">
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_2-2" data-name="Layer 2">
                    <path d="M150.89,122.31a29.32,29.32,0,0,0-10,1.75L98.55,81.72a29.23,29.23,0,0,0-37.3-37.3L16.83,0,0,16.83l44,44a29.23,29.23,0,0,0,15.23,37.9V204.56a29.21,29.21,0,1,0,24.45.4V100.5l40.11,40.11a29.22,29.22,0,1,0,27.11-18.3Z"/>
                </g>
            </g>
        </svg>
    ),
];


export const getSvg = (svgID: number) => {
    return data[svgID]
}