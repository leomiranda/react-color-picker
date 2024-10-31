# React Color Picker Components

A wrapper around `react-color` configured for custom themes and design systems. Built with TypeScript, Tailwind CSS, and shadcn/ui.

[Demo](https://react-color-picker.vercel.app)

## Overview

Unlike traditional color pickers, this component focuses on design system consistency by limiting color selection to 5 variants of each chosen color. This approach ensures color harmony while maintaining flexibility in your design choices.

## Features

- 🎨 Smart Color Selection - Automatically generates 5 harmonious variants
- 🎯 Design System Ready - Perfect for maintaining consistency
- 🔒 Safe Color Choices - Prevents off-brand colors while maintaining creative freedom
- 🎭 Multiple Presentation Options (Card and Popover)
- 📱 Responsive Design
- 🔧 Highly Customizable
- 🌈 Built with react-color
- 🎯 TypeScript Support
- 🎨 Tailwind CSS Styling

## Getting Started

### Prerequisites

- React 18+
- Tailwind CSS
- shadcn/ui components
- react-color

### Installation

1. Clone the repository

```bash
git clone https://github.com/leomiranda/react-color-picker.git
```

2. Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Components

### PopoverColorPicker

A compact color picker that opens in a popover when clicked. Perfect for inline color selection.

```tsx
import { PopoverColorPicker } from './components/PopoverColorPicker';

<PopoverColorPicker
	color="#000000"
	paletteColors={['#068d9d', '#53599a']}
	suggestedColor="#6d9dc5"
	onColorChange={(color) => console.log(color)}
	triggerClassName="w-10 h-10"
/>;
```

#### Props

| Prop             | Type                    | Default   | Description                               |
| ---------------- | ----------------------- | --------- | ----------------------------------------- |
| color            | string                  | required  | The current color value                   |
| paletteColors    | string[]                | required  | Array of colors to display in the palette |
| suggestedColor   | string                  | undefined | Optional suggested color to display       |
| onColorChange    | (color: string) => void | required  | Callback when color changes               |
| triggerClassName | string                  | 'w-9 h-9' | Custom classes for the trigger button     |

### CardColorPicker

A full-sized color picker displayed in a card format. Ideal for dedicated color selection interfaces.

```tsx
import { CardColorPicker } from './components/CardColorPicker';

<CardColorPicker
	color="#000000"
	paletteColors={['#068d9d', '#53599a']}
	suggestedColor="#6d9dc5"
	onColorChange={(color) => console.log(color)}
/>;
```

#### Props

| Prop           | Type                    | Default   | Description                               |
| -------------- | ----------------------- | --------- | ----------------------------------------- |
| color          | string                  | required  | The current color value                   |
| paletteColors  | string[]                | required  | Array of colors to display in the palette |
| suggestedColor | string                  | undefined | Optional suggested color to display       |
| onColorChange  | (color: string) => void | required  | Callback when color changes               |

## Advanced Usage

### Color Variants System

When you select a color, the system automatically generates 5 variants that work harmoniously together:

```tsx
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
	const paletteColors = palette.map((p) => p.value);
	const suggestedColor = palette.find((p) => p.slug === 'secondary')?.value;

	return (
		<PopoverColorPicker
			color={color}
			paletteColors={paletteColors}
			suggestedColor={suggestedColor}
			onColorChange={setColor}
		/>
	);
}
```

This approach ensures:

- Consistent color relationships
- Harmonious design system
- Safe color combinations
- Flexible yet controlled choices

## Use Cases

- Design Systems
- Theme Customization
- Brand Color Management
- UI Component Libraries
- Design Tools
- Admin Interfaces

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Support

- 📫 Report bugs through [GitHub issues](https://github.com/leomiranda/react-color-picker/issues)
- 🌟 Star the repo if you find it helpful!
