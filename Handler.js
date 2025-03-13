(() => {
    const scripts = {
        "oceanar.io": "https://xerobots.github.io/Client.js",
        "agar.cc": "https://xerobots.github.io/Agar.cc-And-Clones.js",
        "happyagar.online": "https://xerobots.github.io/Agar.cc-And-Clones.js",
        "aquar.io": "https://xerobots.github.io/Client.js",
        "easyagario.icu": "https://xerobots.github.io/Agar.cc-And-Clones.js",
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
        function injectScript(retries = 3) {
            if (document.querySelector(`script[src='${scripts[hostname]}']`)) {
                console.log("Script already injected successfully.");
                return;
            }

            const script = document.createElement('script');
            script.src = scripts[hostname];
            script.async = true;
            script.onload = () => console.log(`Successfully injected script: ${script.src}`);
            script.onerror = () => {
                console.error(`Failed to load script: ${script.src}`);
                if (retries > 0) {
                    console.log(`Retrying injection... (${retries} attempts left)`);
                    injectScript(retries - 1);
                } else {
                    console.error("Script injection failed after multiple attempts.");
                }
            };

            document.head.appendChild(script);
        }

        injectScript();
    }
})();
