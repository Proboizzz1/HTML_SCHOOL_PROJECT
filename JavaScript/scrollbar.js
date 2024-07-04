// Function to apply animated rainbow chroma effect to scrollbar
function applyAnimatedRainbowScrollbar() {
    const colors = ['#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF']; // Rainbow colors
    const scrollableElement = document.documentElement;

    // Ensure scrollbar is visible
    scrollableElement.style.overflowY = 'scroll';

    // Initial scrollbar dimensions
    const initialScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const initialScrollbarHeight = window.innerHeight - document.documentElement.clientHeight;

    // Function to update scrollbar dimensions and styles
    function updateScrollbarStyles(width, height) {
        // Create or update style element for scrollbar
        let style = document.querySelector('#custom-scrollbar-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'custom-scrollbar-style';
            document.head.appendChild(style);
        }
        
        style.innerHTML = `
            ::-webkit-scrollbar {
                width: ${width}px;
                height: ${height}px;
            }
            ::-webkit-scrollbar-track {
                background: transparent;
            }
            ::-webkit-scrollbar-thumb {
                background-color: var(--scrollbar-color);
                border: none;
                border-radius: 10px;
                box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                animation: rainbow 10s linear infinite, chroma 5s linear infinite; /* Add rainbow and chroma animations */
                transition: background-color 0.3s ease-out; /* Add transition effect */
            }
            
            @keyframes rainbow {
                0% { background-color: ${colors[0]}; }
                14.29% { background-color: ${colors[1]}; }
                28.57% { background-color: ${colors[2]}; }
                42.86% { background-color: ${colors[3]}; }
                57.14% { background-color: ${colors[4]}; }
                71.43% { background-color: ${colors[5]}; }
                85.71% { background-color: ${colors[0]}; }
                100% { background-color: ${colors[0]}; }
            }
            
            @keyframes chroma {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
    }

    // Initial call to update scrollbar dimensions and styles
    updateScrollbarStyles(initialScrollbarWidth, initialScrollbarHeight);

    // Function to generate random color from array
    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Function to change scrollbar thumb color with animation
    function changeScrollbarColor() {
        const randomColor = getRandomColor();
        document.documentElement.style.setProperty('--scrollbar-color', randomColor);
    }

    // Set interval to change color continuously
    setInterval(changeScrollbarColor, 5000); // Change color every 5 seconds (5000ms)

    // Resize event listener to update scrollbar styles on window resize
    window.addEventListener('resize', function() {
        const newScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        const newScrollbarHeight = window.innerHeight - document.documentElement.clientHeight;
        updateScrollbarStyles(newScrollbarWidth, newScrollbarHeight);
    });
}
it
// Call the function to apply animated rainbow chroma effect to scrollbar
applyAnimatedRainbowScrollbar();
