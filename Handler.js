(function() {
    'use strict';

    // List of domains and corresponding JS files to inject
 const scriptsToInject = {
    "agar.cc": "https://xero.up.railway.app/Xero-Bots-Agar.cc-And-Clones.js",
    "happyagar.online": "https://xero.up.railway.app/Xero-Bots-Agar.cc-And-Clones.js",
    "oceanar.io": "https://xero.up.railway.app/Xero-Bots-Client.js",
    "aquar.io": "https://xero.up.railway.app/Xero-Bots-Client.js",
    "cellsbox.io": "https://xero.up.railway.app/Xero-Bots-Client.js",
    "inciagario.net": "https://xero.up.railway.app/Xero-Bots-Client.js",
    "agariott.com": "https://xero.up.railway.app/Xero-Bots-Client.js",
    "bubleroyal.com": "https://xero.up.railway.app/Xero-Bots-Client.js",
    "agarioio.com": "https://xero.up.railway.app/Xero-Bots-Agar.cc-And-Clones.js",
    "agario.onl": "https://xero.up.railway.app/Xero-Bots-Agar.cc-And-Clones.js",
    "agario.org.uk": "https://xero.up.railway.app/Xero-Bots-Agar.cc-And-Clones.js",
    "agariomoddedserver.com": "https://xero.up.railway.app/Xero-Bots-Agar.cc-And-Clones.js",
    "agariomodded.com": "https://xero.up.railway.app/Xero-Bots-Agar.cc-And-Clones.js",
    "agarioonline.org": "https://xero.up.railway.app/Xero-Bots-Agar.cc-And-Clones.js",
    "agar.boston": "https://xero.up.railway.app/Xero-Bots-Agar.cc-And-Clones.js"
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

    // When the page loads, execute the script
    window.addEventListener('load', function() {
        // Check if the current domain is in the list and inject the corresponding script
        const domain = window.location.hostname;

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
