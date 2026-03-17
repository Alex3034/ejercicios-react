import { useState } from 'react';

const CHAR_POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

function generatePassword(length) {
	let result = '';
	for (let i = 0; i < length; i += 1) {
		const randomIndex = Math.floor(Math.random() * CHAR_POOL.length);
		result += CHAR_POOL[randomIndex];
	}
	return result;
}

function Ejercicio7() {
	const [lengthInput, setLengthInput] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleGenerate = () => {
		const length = Number(lengthInput);

		if (lengthInput.trim() === '' || Number.isNaN(length) || length < 4) {
			setError('La longitud debe ser mayor o igual a 4.');
			setPassword('');
			return;
		}

		setError('');
		setPassword(generatePassword(length));
	};

	return (
		<div style={{ padding: '20px', maxWidth: '520px' }}>
			<h1>Ejercicio 7: Generador de Contraseñas</h1>

			<label htmlFor="password-length" style={{ display: 'block', marginBottom: '8px' }}>
				Longitud de la contraseña
			</label>
			<input
				id="password-length"
				type="number"
				min="4"
				value={lengthInput}
				onChange={(event) => setLengthInput(event.target.value)}
				placeholder="Ejemplo: 12"
				style={{ padding: '10px', width: '100%', marginBottom: '12px' }}
			/>

			<button onClick={handleGenerate} style={{ padding: '10px 14px' }}>
				Generar contraseña
			</button>

			{error && <p style={{ color: '#d32f2f', marginTop: '12px' }}>{error}</p>}

			{password && (
				<div style={{ marginTop: '16px' }}>
					<p style={{ marginBottom: '8px' }}>Contraseña generada:</p>
					<code style={{ display: 'block', wordBreak: 'break-all' }}>{password}</code>
				</div>
			)}
		</div>
	);
}

export default Ejercicio7;
