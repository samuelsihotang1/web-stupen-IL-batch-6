interface LoadedScripts {
    [key: string]: boolean;
}

export const loadedScripts: LoadedScripts = {};

export function loadScripts(scripts: string[]): void {
    scripts.forEach(script => {
        if (!loadedScripts[script]) {
            const scriptElement = document.createElement('script');
            scriptElement.src = script;
            scriptElement.async = true;
            document.body.appendChild(scriptElement);

            loadedScripts[script] = true;
        }
    });
}
