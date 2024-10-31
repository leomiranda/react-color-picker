import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Label } from './components/ui/label';
import { CardColorPicker } from './components/CardColorPicker';
import { PopoverColorPicker } from './components/PopoverColorPicker';
import Slider from 'react-color/lib/components/slider/Slider';
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
		title: 'Quintenary',
		slug: 'quintenary',
		value: '#aeecef',
	},
];

function App() {
	const [color, setColor] = useState('#000000');
	const [suggestedPaletteColor, setSuggestedPaletteColor] =
		useState('secondary');
	const suggestedColor = palette.find(
		(p) => p.slug === suggestedPaletteColor
	)?.value;
	const paletteColors = palette.map((p) => p.value);

	return (
		<div className="min-h-screen bg-gray-50 py-12">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						React Color Picker
					</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
						A wrapper around react-color configured for custom themes and design
						systems. Built with TypeScript, Tailwind CSS, and shadcn/ui.
					</p>
					<p className="text-sm text-gray-500 max-w-2xl mx-auto">
						Unlike traditional color pickers, this component focuses on design
						system consistency by limiting color selection to 5 variants of each
						chosen color. This approach ensures color harmony while maintaining
						flexibility in your design choices.
					</p>
				</div>

				<div className="max-w-4xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="p-4 rounded-lg bg-white border">
						<h3 className="font-medium mb-2">🎨 Smart Color Selection</h3>
						<p className="text-sm text-gray-600">
							Automatically generates 5 harmonious variants for each selected
							color
						</p>
					</div>
					<div className="p-4 rounded-lg bg-white border">
						<h3 className="font-medium mb-2">🎯 Design System Ready</h3>
						<p className="text-sm text-gray-600">
							Perfect for maintaining consistency across your application
						</p>
					</div>
					<div className="p-4 rounded-lg bg-white border">
						<h3 className="font-medium mb-2">🔒 Safe Color Choices</h3>
						<p className="text-sm text-gray-600">
							Prevents off-brand colors while maintaining creative freedom
						</p>
					</div>
				</div>

				<div className="container mx-auto grid gap-8 md:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle>Card Variant</CardTitle>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-2">
								<Label>Selected Color: {color}</Label>
								<div
									className="h-20 w-full rounded-lg border"
									style={{ backgroundColor: color }}
								/>
							</div>
							<CardColorPicker
								color={color}
								paletteColors={paletteColors}
								suggestedColor={suggestedColor}
								onColorChange={setColor}
							/>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Popover Variant</CardTitle>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-4">
								<div className="flex items-center gap-4">
									<Label>Button Size:</Label>
									<div className="flex gap-2">
										<PopoverColorPicker
											color={color}
											paletteColors={paletteColors}
											suggestedColor={suggestedColor}
											onColorChange={setColor}
											triggerClassName="w-6 h-6"
										/>
										<PopoverColorPicker
											color={color}
											paletteColors={paletteColors}
											suggestedColor={suggestedColor}
											onColorChange={setColor}
											triggerClassName="w-9 h-9"
										/>
										<PopoverColorPicker
											color={color}
											paletteColors={paletteColors}
											suggestedColor={suggestedColor}
											onColorChange={setColor}
											triggerClassName="w-12 h-12"
										/>
									</div>
								</div>

								<div className="space-y-2">
									<Label>Example Usage</Label>
									<div className="flex items-center gap-4 p-4 rounded-lg bg-white border">
										<PopoverColorPicker
											color={color}
											paletteColors={paletteColors}
											suggestedColor={suggestedColor}
											onColorChange={setColor}
										/>
										<span className="text-sm text-gray-500">
											Click to change color
										</span>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="md:col-span-2">
						<CardHeader>
							<CardTitle>Color Palette</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-gray-500 mb-4">
								Click on any color in the preview to set it as the suggested
								color.
							</p>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
								{palette.map((item) => (
									<div
										key={item.slug}
										className="space-y-2"
										onClick={() => setSuggestedPaletteColor(item.slug)}
									>
										<div
											className="h-20 rounded-lg border cursor-pointer transition-transform hover:scale-105"
											style={{ backgroundColor: item.value }}
											title="Click to set as suggested color"
										/>
										<div className="text-sm">
											<p className="font-medium">{item.title}</p>
											<p className="text-gray-500">{item.value}</p>
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>

				<div className="max-w-4xl mx-auto mt-12">
					<Card>
						<CardHeader>
							<CardTitle>Understanding Color Variants</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-col gap-8">
							<p className="text-gray-600">
								When you select a color, this component of{' '}
								<span className="font-medium">react-color</span> automatically
								generates 5 variants:
							</p>
							<div className="w-full">
								<Slider
									color={color}
									onChange={(color) => setColor(color.hex)}
								/>
							</div>
							<p className="text-sm text-gray-500">
								This approach ensures that your color choices remain consistent
								with your design system while still providing flexibility for
								different use cases like hover states, backgrounds, and accents.
							</p>
						</CardContent>
					</Card>
				</div>

				<footer className="mt-12 text-center space-y-2">
					<p className="text-sm text-gray-400">
						Built on top of react-color with added design system constraints and
						theme support.
					</p>
				</footer>
			</div>
		</div>
	);
}

export default App;
