import { CirclePicker } from 'react-color';
import { useState } from 'react';
import Slider from 'react-color/lib/components/slider/Slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import './index.css';

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
	const paletteColors = palette.map((p) => p.value);
	return (
		<div className="container mx-auto p-4 max-w-md">
			<Card>
				<CardHeader>
					<CardTitle>Seletor de Cores</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="color-input">Valor Hexadecimal</Label>
						<div className="flex gap-2">
							<Input
								id="color-input"
								value={color}
								onChange={(e) => setColor(e.target.value)}
							/>
							<div
								className="w-12 h-10 rounded border"
								style={{ backgroundColor: color }}
								title="Cor selecionada"
							/>
						</div>
					</div>

					<div className="space-y-2">
						<Label>Paleta de Cores</Label>
						<CirclePicker
							colors={paletteColors}
							onChange={(color) => setColor(color.hex)}
						/>
					</div>

					<div className="space-y-2">
						<Label>Ajuste de Cor</Label>
						<Slider color={color} onChange={(color) => setColor(color.hex)} />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

export default App;
