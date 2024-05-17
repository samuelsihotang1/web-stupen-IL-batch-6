import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ScriptLoader from './tools/ScriptLoader.tsx';

const Main = () => {
	const [isCommonScriptLoaded, setIsCommonScriptLoaded] = useState(false);
	const [isMainScriptLoaded, setIsMainScriptLoaded] = useState(false);

	const handleCommonScriptLoad = () => {
		setIsCommonScriptLoaded(true);
	};

	const handleMainScriptLoad = () => {
		setIsMainScriptLoaded(true);
	};

	return (
		<>
			{!isCommonScriptLoaded && (
				<ScriptLoader
					src="/assets/js/common_scripts.min.js"
					onLoad={handleCommonScriptLoad}
				/>
			)}
			{!isMainScriptLoaded && (
				<ScriptLoader src="/assets/js/main.js" onLoad={handleMainScriptLoad} />
			)}
			{isCommonScriptLoaded && isMainScriptLoaded && <App />}
		</>
	);
};

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>
);
