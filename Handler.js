setTimeout(() => {
    const scripts = {
        "agar.cc": "https://xerobots.github.io/Agar.cc-And-Clones.js",
        "happyagar.online": "https://xerobots.github.io/Agar.cc-And-Clones.js",
        "oceanar.io": "https://xerobots.github.io/Client.js",
        "aquar.io": "https://xerobots.github.io/Client.js",
        "cellsbox.io": "https://xerobots.github.io/Client.js",
        "inciagario.net": "https://xerobots.github.io/Client.js",
        "agariott.com": "https://xerobots.github.io/Client.js",
        "bubleroyal.com": "https://xerobots.github.io/Client.js",
        "agarioio.com": "https://xerobots.github.io/Agar.cc-And-Clones.js",
        "agario.onl": "https://xerobots.github.io/Agar.cc-And-Clones.js",
        "agario.org.uk": "https://xerobots.github.io/Agar.cc-And-Clones.js",
        "agariomoddedserver.com": "https://xerobots.github.io/Agar.cc-And-Clones.js",
        "agariomodded.com": "https://xerobots.github.io/Agar.cc-And-Clones.js",
        "agarioonline.org": "https://xerobots.github.io/Agar.cc-And-Clones.js",
        "agar.boston": "https://xerobots.github.io/Agar.cc-And-Clones.js"
    };

    const hostname = window.location.hostname;
    if (scripts[hostname]) {
        setTimeout(() => {
            const script = document.createElement('script');
            script.src = scripts[hostname];
            script.async = true;
            document.head.appendChild(script);
            console.log(`Injected script: ${script.src}`);
        }, 2000); // Additional delay to ensure stability
    }
}, 8000); // Initial delay before processing
