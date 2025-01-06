// susigeneruosime HTML struktura naudodami arrow funkcija

const generateHTML = () => {
    document.body.innerHTML =
    <div id='snow-container'></div>
    <div id='greeting'>
        <h1>Linksmu kaledu!</h1>
        <p>Kaledu be sniego nebuna!</p>
        <button id='start-snowing'>Let it snow</button>
    </div>
    ;
};

const applyStyles = () => {
    document.body.style.margin = '0';
    document.body.style.owerflow = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.backgroundColor = '#4276a2';
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';

    const snowContainer = document.getElementById('snow-container');
    snowContainer.style.position = 'absolute';
    snowContainer.style.top = '0';
    snowContainer.style.left = '0';
    snowContainer.style.width = '100%';
    snowContainer.style.height = '100%';
    snowContainer.style.pointerEvents = 'none';
};

// Cia gyvens musu snaigiu objektai
const snowflakes = [];

// Funkcija, kur sugeneruos snaiges objekta
const createSnowflake = () => {
    return
    x: Math.random() * window.innerWidth,
    y: Math.random() * -50,
    size: Math.random() * 5 + 2,

}

// Funkcija, kuri filtruos snaiges pagal dydi (pvz, isfiltruos tik didesnius nei 4px);
const filterBigSnowflake = () => snowflakes.filter((flake) => flake.size > 4);

// Funkcija, kuri atvaizduos snaiges DOM'e
const renderSnowflakes = () => {
    const container = document.getElementById('snow-container');

    snowflakes.forEach((flake) => {
        const div = document.createElement('div');

    })
}