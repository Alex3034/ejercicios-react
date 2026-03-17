import { useEffect, useRef, useState } from 'react';

function formatTime(totalSeconds) {
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	const pad = (value) => String(value).padStart(2, '0');
	return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function Ejercicio6() {
	const [elapsedSeconds, setElapsedSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const intervalRef = useRef(null);

	useEffect(() => {
		if (isRunning) {
			intervalRef.current = setInterval(() => {
				setElapsedSeconds((previous) => previous + 1);
			}, 1000);
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [isRunning]);

	const handleStart = () => {
		setIsRunning(true);
	};

	const handlePause = () => {
		setIsRunning(false);
	};

	const handleReset = () => {
		setIsRunning(false);
		setElapsedSeconds(0);
	};

	return (
		<div style={{ padding: '20px', maxWidth: '420px' }}>
			<h1>Ejercicio 6: Temporizador</h1>
			<p style={{ fontSize: '40px', fontFamily: 'monospace', margin: '20px 0' }}>
				{formatTime(elapsedSeconds)}
			</p>

			<div style={{ display: 'flex', gap: '10px' }}>
				<button onClick={handleStart} disabled={isRunning}>
					Iniciar
				</button>
				<button onClick={handlePause} disabled={!isRunning}>
					Pausar
				</button>
				<button onClick={handleReset}>
					Reiniciar
				</button>
			</div>
		</div>
	);
}

export default Ejercicio6;
