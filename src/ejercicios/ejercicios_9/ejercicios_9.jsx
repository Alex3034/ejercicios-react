import { useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'ejercicio9_tareas';

function loadTasks() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) {
			return [];
		}
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}

function Ejercicio9() {
	const [text, setText] = useState('');
	const [tasks, setTasks] = useState(loadTasks);

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
	}, [tasks]);

	const completedCount = useMemo(() => tasks.filter((task) => task.completed).length, [tasks]);

	const addTask = () => {
		const trimmed = text.trim();
		if (trimmed === '') {
			return;
		}

		const newTask = {
			id: Date.now(),
			text: trimmed,
			completed: false,
		};

		setTasks((previous) => [...previous, newTask]);
		setText('');
	};

	const toggleTask = (taskId) => {
		setTasks((previous) =>
			previous.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const clearCompleted = () => {
		setTasks((previous) => previous.filter((task) => !task.completed));
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			addTask();
		}
	};

	return (
		<div style={{ padding: '20px', maxWidth: '620px' }}>
			<h1>Ejercicio 9: Lista de Tareas con LocalStorage</h1>

			<div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
				<input
					type="text"
					value={text}
					onChange={(event) => setText(event.target.value)}
					onKeyDown={handleKeyDown}
					placeholder="Escribe una tarea"
					style={{ flex: 1, padding: '10px' }}
				/>
				<button onClick={addTask} style={{ padding: '10px 14px' }}>
					Agregar
				</button>
			</div>

			<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
				{tasks.map((task) => (
					<li
						key={task.id}
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
							padding: '8px 0',
							borderBottom: '1px solid #ddd',
						}}
					>
						<input
							type="checkbox"
							checked={task.completed}
							onChange={() => toggleTask(task.id)}
						/>
						<span
							style={{
								textDecoration: task.completed ? 'line-through' : 'none',
								opacity: task.completed ? 0.7 : 1,
							}}
						>
							{task.text}
						</span>
					</li>
				))}
			</ul>

			<div style={{ marginTop: '14px', display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
				<p style={{ margin: 0 }}>
					Completadas: {completedCount}
				</p>
				<button onClick={clearCompleted} style={{ padding: '8px 12px' }}>
					Limpiar completadas
				</button>
			</div>
		</div>
	);
}

export default Ejercicio9;
