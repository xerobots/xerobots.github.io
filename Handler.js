(function () {
    'use strict';

    // List of domains and corresponding JS files to inject
    const scriptsToInject = {
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

    // Function to inject the JS file
    function injectScript(url) {
        if (document.querySelector(`script[src="${url}"]`)) return; // Prevent duplicate injection

        const script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        script.onload = () => console.log(`Script injected successfully from ${url}`);
        script.onerror = () => handleError(url);
        document.head.appendChild(script);
    }

    // Retry logic with exponential backoff
    function retryInjectScript(url, retries = 3, delay = 2000) {
        if (retries > 0) {
            injectScript(url);
            setTimeout(() => {
                if (!document.querySelector(`script[src="${url}"]`)) {
                    retryInjectScript(url, retries - 1, delay * 1.5);
                }
            }, delay);
        } else {
            handleError(url);
        }
    }

    // Error handling
    function handleError(url) {
        console.error(`Failed to inject script: ${url}`);
        alert(`Failed to load the script for this site. Please check your internet connection or try again later.`);
    }

    // When the page loads, execute the script
    window.addEventListener('load', function () {
        const domain = window.location.hostname;

        for (const [site, scriptUrl] of Object.entries(scriptsToInject)) {
            if (domain === site || domain.endsWith(`.${site}`)) {
                console.log(`Site matched: ${domain}`);
                retryInjectScript(scriptUrl);
                break;
            }
        }
    });

    // Handle dynamic content loading (AJAX)
    const observer = new MutationObserver(function (mutations) {
        for (const mutation of mutations) {
            if (mutation.type === 'childList' || mutation.type === 'subtree') {
                const domain = window.location.hostname;
                for (const [site, scriptUrl] of Object.entries(scriptsToInject)) {
                    if ((domain === site || domain.endsWith(`.${site}`)) && !document.querySelector(`script[src="${scriptUrl}"]`)) {
                        retryInjectScript(scriptUrl);
                        break;
                    }
                }
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
