import { useMemo, useState } from 'react';

function Ejercicio8() {
	const [text, setText] = useState('');

	const wordCount = useMemo(() => {
		const trimmed = text.trim();
		if (trimmed === '') {
			return 0;
		}
		return trimmed.split(/\s+/).length;
	}, [text]);

	const characterCount = useMemo(() => {
		return text.replace(/[\s\n\r]/g, '').length;
	}, [text]);

	return (
		<div style={{ padding: '20px', maxWidth: '640px' }}>
			<h1>Ejercicio 8: Contador de Palabras y Caracteres</h1>

			<textarea
				value={text}
				onChange={(event) => setText(event.target.value)}
				placeholder="Escribe aqui tu parrafo..."
				rows={8}
				style={{
					width: '100%',
					padding: '10px',
					fontSize: '16px',
					resize: 'vertical',
				}}
			/>

			<div style={{ marginTop: '14px' }}>
				<p style={{ margin: '4px 0' }}>Palabras: {wordCount}</p>
				<p style={{ margin: '4px 0' }}>Caracteres (sin espacios ni saltos): {characterCount}</p>
			</div>
		</div>
	);
}

export default Ejercicio8;
