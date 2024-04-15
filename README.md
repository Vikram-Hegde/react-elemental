# React Elemental

## Description

`@vikramhegde/react-elemental` is a React component library designed to provide a set of UI components for building modern web applications with ease.

## Installation

You can install `@vikramhegde/react-elemental` via npm:

```bash
npm install @vikramhegde/react-elemental
```

or with yarn:

```bash
yarn add @vikramhegde/react-elemental
```

## Usage

Once installed, you can import components from `@vikramhegde/react-elemental` and use them within your React application.

```jsx
import React from 'react'
import { Button } from '@vikramhegde/react-elemental'

const MyComponent = () => (
	<div>
		<Button text="Click me" onClick={() => alert('Button clicked!')} />
		<Badge count={5} maxCount={20}>
			<YourComponent />
		</Badge>
	</div>
)

export default MyComponent
```

## Available Components

- `Button`
- `Badge`
- `Input`
- `Dropdown`
- more to come soon!
