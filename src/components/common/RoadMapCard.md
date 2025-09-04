# RoadMapCard Component

A modular and reusable roadmap card component for displaying project milestones, phases, or any timeline-based information.

## Features

- ✅ Fully customizable styling
- ✅ Custom icons support
- ✅ Flexible status badges
- ✅ Responsive design
- ✅ TypeScript support
- ✅ Optional outcome text
- ✅ Multiple theme variants

## Basic Usage

```tsx
import RoadMapCard from "../common/RoadMapCard";

<RoadMapCard
  completed={true}
  quarter="Q1"
  year="2024"
  title="Project Planning"
  items={["Define project scope", "Create timeline", "Assemble team"]}
  outcome="Project foundation established"
/>;
```

## Props Interface

### Required Props

| Prop        | Type       | Description                           |
| ----------- | ---------- | ------------------------------------- |
| `completed` | `boolean`  | Whether the milestone is completed    |
| `quarter`   | `string`   | Quarter identifier (e.g., "Q1", "Q2") |
| `year`      | `string`   | Year identifier                       |
| `title`     | `string`   | Main title of the milestone           |
| `items`     | `string[]` | Array of milestone items/tasks        |

### Optional Props

#### Styling Props

| Prop                | Type     | Default              | Description                   |
| ------------------- | -------- | -------------------- | ----------------------------- |
| `bgColor`           | `string` | `"bg-[#f0f0f0]"`     | Background color class        |
| `textColor`         | `string` | `"text-gray-900"`    | Main text color class         |
| `yearColor`         | `string` | `"text-gray-500"`    | Year text color class         |
| `borderColor`       | `string` | `"border-[#e8e8e8]"` | Border color class            |
| `borderBottomColor` | `string` | `"border-[#e8e8e8]"` | Bottom border color for items |

#### Status Badge Props

| Prop              | Type      | Default              | Description                   |
| ----------------- | --------- | -------------------- | ----------------------------- |
| `showCompleted`   | `boolean` | `true`               | Whether to show status badge  |
| `completedLabel`  | `string`  | Auto-generated       | Custom label for status badge |
| `completedBg`     | `string`  | `"bg-[#49ff86]"`     | Status badge background       |
| `completedText`   | `string`  | `"text-[#07130c]"`   | Status badge text color       |
| `completedBorder` | `string`  | `"border-[#183c24]"` | Status badge border color     |

#### Icon Props

| Prop            | Type              | Default        | Description           |
| --------------- | ----------------- | -------------- | --------------------- |
| `icon`          | `React.ReactNode` | Check icon     | Custom icon component |
| `iconBgColor`   | `string`          | `"bg-black"`   | Icon background color |
| `iconTextColor` | `string`          | `"text-white"` | Icon color            |

#### Layout Props

| Prop        | Type     | Default | Description                  |
| ----------- | -------- | ------- | ---------------------------- |
| `className` | `string` | `""`    | Additional CSS classes       |
| `outcome`   | `string` | -       | Optional outcome description |

## Examples

### 1. Basic Usage

```tsx
<RoadMapCard
  completed={true}
  quarter="Q1"
  year="2024"
  title="Foundation"
  items={["Setup project", "Define architecture"]}
  outcome="Project foundation established"
/>
```

### 2. Custom Styling

```tsx
<RoadMapCard
  completed={false}
  quarter="Q2"
  year="2024"
  title="Development"
  items={["Build features", "Implement APIs"]}
  bgColor="bg-blue-50"
  textColor="text-blue-900"
  yearColor="text-blue-600"
  borderColor="border-blue-200"
/>
```

### 3. Custom Icon

```tsx
import { Target } from "lucide-react";

<RoadMapCard
  completed={false}
  quarter="Q3"
  year="2024"
  title="Testing"
  items={["Unit tests", "Integration tests"]}
  icon={<Target className="w-3 h-3 text-white" />}
  iconBgColor="bg-purple-600"
  completedLabel="In Testing"
/>;
```

### 4. Dark Theme

```tsx
<RoadMapCard
  completed={true}
  quarter="Q4"
  year="2024"
  title="Deployment"
  items={["Deploy to production", "Configure monitoring"]}
  bgColor="bg-gray-900"
  textColor="text-white"
  yearColor="text-gray-400"
  borderColor="border-gray-700"
/>
```

### 5. Minimal Version

```tsx
<RoadMapCard
  completed={false}
  quarter="Q1"
  year="2025"
  title="Future Planning"
  items={["Analyze feedback", "Plan enhancements"]}
  showCompleted={false}
  bgColor="bg-white"
  textColor="text-gray-800"
/>
```

## Data-Driven Approach

```tsx
const roadmapData = [
  {
    completed: true,
    quarter: "Q1",
    year: "2024",
    title: "Foundation",
    items: ["Setup project", "Define architecture"],
    outcome: "Project foundation established",
    bgColor: "bg-green-50",
    textColor: "text-green-900",
  },
  // ... more items
];

return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {roadmapData.map((card, index) => (
      <RoadMapCard key={index} {...card} />
    ))}
  </div>
);
```

## Customization Tips

1. **Color Schemes**: Use Tailwind CSS color classes for consistent theming
2. **Icons**: Import from lucide-react or use custom SVG components
3. **Responsive Design**: The component is responsive by default, but you can add custom classes
4. **Status Labels**: Customize labels for different project phases (e.g., "In Progress", "Testing", "Review")

## Accessibility

- The component uses semantic HTML structure
- Status badges are clearly labeled
- Color contrast follows accessibility guidelines
- Icons have proper alt text equivalents

## Dependencies

- React
- Lucide React (for default icons)
- Tailwind CSS (for styling)

