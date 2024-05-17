import { useEffect } from 'react';

const ScriptLoader = ({ src, onLoad }: { src: string; onLoad: () => void }) => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = src;
		script.async = true;
		script.onload = onLoad;
		document.body.appendChild(script);

		// return () => {
		// 	document.body.removeChild(script);
		// };
	}, [src, onLoad]);

	return null;
};

export default ScriptLoader;
