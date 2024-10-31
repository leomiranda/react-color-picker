import { CirclePicker } from 'react-color';
import { Label } from './ui/label';
import { Input } from '@/components/ui/input';
import Slider from 'react-color/lib/components/slider/Slider';

export interface ColorPickerProps {
	paletteColors: string[];
	suggestedColor?: string;
	onColorChange: (color: string) => void;
	color: string;
}

export function ColorPicker({
	paletteColors,
	suggestedColor,
	onColorChange,
	color,
}: ColorPickerProps) {
	return (
		<div className="flex flex-col gap-4">
			<div className="space-y-2">
				<Label htmlFor="color-input">Hexadecimal Value</Label>
				<div className="flex gap-2">
					<Input
						id="color-input"
						value={color}
						className="w-32"
						onChange={(e) => onColorChange(e.target.value)}
					/>
					<div
						className="block w-9 h-9 rounded border"
						style={{ backgroundColor: color }}
						title="Selected Color"
					/>
				</div>
			</div>

			<div className="flex gap-4">
				<div className="space-y-2">
					<Label>Color Palette</Label>
					<CirclePicker
						colors={paletteColors}
						onChange={(color) => onColorChange(color.hex)}
					/>
				</div>

				<div className="space-y-2">
					<Label>Suggested Color</Label>
					<CirclePicker
						colors={suggestedColor ? [suggestedColor] : []}
						onChange={(color) => onColorChange(color.hex)}
					/>
				</div>
			</div>
			<div className="space-y-2">
				<Label>Color Adjust</Label>
				<Slider color={color} onChange={(color) => onColorChange(color.hex)} />
			</div>
		</div>
	);
}
