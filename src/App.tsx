import { useState } from 'react';

import './index.css';
import { CardColorPicker } from './components/CardColorPicker';
import { PopoverColorPicker } from './components/PopoverColorPicker';

const palette = [
	{
		title: 'Primary',
		slug: 'primary',
		value: '#068d9d',
	},
	{
		title: 'Secondary',
		slug: 'secondary',
		value: '#53599a',
	},
	{
		title: 'Tertiary',
		slug: 'tertiary',
		value: '#6d9dc5',
	},
	{
		title: 'Quaternary',
		slug: 'quaternary',
		value: '#80ded9',
	},
	{
		title: 'Quintenário',
		slug: 'quintenary',
		value: '#aeecef',
	},
];
function App() {
	const [color, setColor] = useState('#000000');
	const suggestedPaletteColor = 'secondary';
	const suggestedColor = palette.find(
		(p) => p.slug === suggestedPaletteColor
	)?.value;
	const paletteColors = palette.map((p) => p.value);
	return (
		<div className="container mx-auto p-4 max-w-md">
			<div className="flex flex-col gap-4">
				<h1 className="text-2xl font-bold mb-4">Color Picker</h1>
				<CardColorPicker
					color={color}
					paletteColors={paletteColors}
					suggestedColor={suggestedColor}
					onColorChange={setColor}
				/>
				<PopoverColorPicker
					color={color}
					paletteColors={paletteColors}
					suggestedColor={suggestedColor}
					onColorChange={setColor}
				/>
			</div>
		</div>
	);
}

export default App;
