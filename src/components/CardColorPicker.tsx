import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ColorPicker, ColorPickerProps } from './ColorPicker';

interface CardColorPickerProps extends ColorPickerProps {
	paletteColors: string[];
	suggestedColor?: string;
}

export function CardColorPicker({
	color,
	paletteColors,
	suggestedColor,
	onColorChange,
}: CardColorPickerProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Color Selector</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<ColorPicker
					color={color}
					paletteColors={paletteColors}
					suggestedColor={suggestedColor}
					onColorChange={onColorChange}
				/>
			</CardContent>
		</Card>
	);
}
