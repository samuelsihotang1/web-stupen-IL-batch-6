import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const ScriptLoader = ({ src, onLoad }: { src: string; onLoad: () => void }) => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = src;
		script.async = true;
		script.onload = onLoad;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, [src, onLoad]);

	return null;
};

const Main = () => {
	const [isScriptLoaded, setIsScriptLoaded] = useState(false);

	const handleScriptLoad = () => {
		setIsScriptLoaded(true);
	};

	return (
		<>
			{!isScriptLoaded && (
				<ScriptLoader
					src="/assets/js/common_scripts.min.js"
					onLoad={handleScriptLoad}
				/>
			)}
			{isScriptLoaded && <App />}
		</>
	);
};

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>
);
