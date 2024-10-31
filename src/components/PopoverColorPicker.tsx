import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ColorPicker } from './ColorPicker';

interface PopoverColorPickerProps {
	color: string;
	paletteColors: string[];
	suggestedColor?: string;
	onColorChange: (color: string) => void;
	triggerClassName?: string;
}

export function PopoverColorPicker({
	color,
	paletteColors,
	suggestedColor,
	onColorChange,
	triggerClassName = 'w-9 h-9',
}: PopoverColorPickerProps) {
	return (
		<Popover>
			<PopoverTrigger>
				<div
					className={`rounded border cursor-pointer ${triggerClassName}`}
					style={{ backgroundColor: color }}
					title="Click to choose the color"
				/>
			</PopoverTrigger>
			<PopoverContent className="w-[410px]">
				<ColorPicker
					color={color}
					paletteColors={paletteColors}
					suggestedColor={suggestedColor}
					onColorChange={(newColor) => {
						onColorChange(newColor);
					}}
				/>
			</PopoverContent>
		</Popover>
	);
}
