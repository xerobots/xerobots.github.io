(() => {
    const scripts = {
        "oceanar.io": "//xerobots.github.io/OceanarAndBubleAndMore.js",
        "agar.cc": "//xerobots.github.io/Agar.cc-And-Clones.js",
        "happyagar.online": "//xerobots.github.io/Agar.cc-And-Clones.js",
        "aquar.io": "//xerobots.github.io/OceanarAndBubleAndMore.js",
        "gota.io": "//xerobots.github.io/Gota.js",
        "easyagario.icu": "//xerobots.github.io/Agar.cc-And-Clones.js",
        "agarprivateservers.org": "//xerobots.github.io/Agar.cc-And-Clones.js",
        "cellsbox.io": "//xerobots.github.io/OceanarAndBubleAndMore.js",
        "inciagario.net": "//xerobots.github.io/OceanarAndBubleAndMore.js",
        "agariott.com": "//xerobots.github.io/OceanarAndBubleAndMore.js",
        "bubleroyal.com": "//xerobots.github.io/OceanarAndBubleAndMore.js",
        "agarioio.com": "//xerobots.github.io/Agar.cc-And-Clones.js",
        "agario.onl": "//xerobots.github.io/Agar.cc-And-Clones.js",
        "agario.org.uk": "//xerobots.github.io/Agar.cc-And-Clones.js",
        "agariomoddedserver.com": "//xerobots.github.io/Agar.cc-And-Clones.js",
        "agariomodded.com": "//xerobots.github.io/Agar.cc-And-Clones.js",
        "agarioonline.org": "//xerobots.github.io/Agar.cc-And-Clones.js",
        "agar.boston": "//xerobots.github.io/Agar.cc-And-Clones.js"
    };

    const hostname = window.location.hostname;

    if (scripts[hostname]) {
        function injectScript(retries = 5) {
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
