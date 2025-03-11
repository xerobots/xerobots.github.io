(function() {
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
        const script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        script.onload = () => console.log(`Script injected successfully from ${url}`);
        script.onerror = () => handleError(url);
        document.head.appendChild(script);
    }

    // Retry logic
    function retryInjectScript(url, retries = 3, delay = 2000) {
        if (retries > 0) {
            injectScript(url);
            setTimeout(() => {
                // If the script is not loaded after a delay, retry
                if (!document.querySelector(`script[src="${url}"]`)) {
                    retryInjectScript(url, retries - 1, delay);
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

    // Change the title to "Xero-Bots | Active"
    function changeTitle(targetTitle, retries = 5, delay = 1000) {
        setTimeout(() => {
            // Check if the title is already correct
            if (document.title !== targetTitle && retries > 0) {
                document.title = targetTitle;
                console.log(`Trying to set title to "${targetTitle}"`);

                // If it still doesn't match, retry
                changeTitle(targetTitle, retries - 1, delay);
            } else if (retries === 0) {
                console.error("Failed to change the title after multiple attempts.");
            }
        }, delay);
    }

    // When the page loads, execute the script
    window.addEventListener('load', function() {
        // Check if the current domain is in the list and inject the corresponding script
        const domain = window.location.hostname;

        // Change the page title if it's not the right one
        changeTitle("Xero-Bots | Active");

        for (const [site, scriptUrl] of Object.entries(scriptsToInject)) {
            if (domain.includes(site)) {
                console.log(`Site matched: ${domain}`);
                retryInjectScript(scriptUrl);
                break;
            }
        }
    });

    // Handle dynamic content loading (AJAX)
    const observer = new MutationObserver(function(mutations) {
        for (const mutation of mutations) {
            if (mutation.type === 'childList' || mutation.type === 'subtree') {
                // Check if the current domain matches and inject the script if needed
                const domain = window.location.hostname;
                for (const [site, scriptUrl] of Object.entries(scriptsToInject)) {
                    if (domain.includes(site) && !document.querySelector(`script[src="${scriptUrl}"]`)) {
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
