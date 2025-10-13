# Example Chatbot System Documentation

## Overview
This system provides a professional way to showcase different AI chatbot examples with specific Voiceflow chatbot IDs. When users click "Try this example" on the examples page, they are taken to a dedicated page where they can interact with a chatbot configured for that specific use case.

## Architecture

### Components Created

1. **ExampleChatbot Component** (`src/app/_component/ExampleChatbot.tsx`)
   - Reusable chatbot component that accepts a `chatbotId` prop
   - Handles initialization and cleanup of Voiceflow chatbots
   - Supports auto-opening and custom delay settings
   - Professional error handling and logging

2. **Dynamic Example Pages** (`src/app/examples/[slug]/page.tsx`)
   - Dynamic routing for individual examples
   - Professional UI with example details and features
   - Integrated chatbot functionality
   - Navigation back to examples list

3. **Updated RealAIScenarios Component** (`src/app/examples/components/RealAIScenarios.tsx`)
   - Now navigates to specific example pages instead of console logging
   - Clean, professional example data structure
   - Removed duplicate entries

## How It Works

### 1. User Flow
1. User visits `/examples` page
2. Sees grid of example cards with "Try this example" buttons
3. Clicks button → navigates to `/examples/[slug]` page
4. On example page, clicks "Try This Example" → chatbot opens with specific ID
5. User interacts with the chatbot configured for that example

### 2. Configuration
Each example is configured in `src/app/examples/[slug]/page.tsx` with:
- Title and description
- Icon assets (light/dark variants)
- Unique slug for routing
- Specific chatbot ID for Voiceflow
- Feature list for the example

### 3. Chatbot Integration
- Each example uses a unique Voiceflow chatbot ID
- The `ExampleChatbot` component handles initialization
- Auto-opens when user clicks "Try This Example"
- Professional cleanup when navigating away

## Adding New Examples

To add a new example:

1. **Add to exampleConfigs** in `src/app/examples/[slug]/page.tsx`:
```typescript
"new-example": {
  title: "New Example",
  description: "Description of what this example does.",
  iconLight: newExampleDark,
  iconDark: newExampleLight,
  chatbotId: "your_voiceflow_chatbot_id",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
}
```

2. **Add to examples array** in `src/app/examples/components/RealAIScenarios.tsx`:
```typescript
{
  iconLight: newExampleDark,
  iconDark: newExampleLight,
  title: "New Example",
  description: "Description of what this example does.",
  slug: "new-example",
  hasPromotion: true,
}
```

3. **Add icon assets** to `src/app/assets/` directory

## Professional Features

- **Clean Navigation**: Professional back button and breadcrumb navigation
- **Responsive Design**: Works on all device sizes
- **Error Handling**: Graceful handling of missing examples or chatbot failures
- **Performance**: Only loads chatbot when needed
- **Accessibility**: Proper semantic HTML and ARIA labels
- **SEO Friendly**: Proper meta tags and structured data

## Technical Details

- Uses Next.js 13+ App Router with dynamic routing
- TypeScript for type safety
- Tailwind CSS for styling
- Professional component architecture
- Clean separation of concerns

## Security Considerations

- Chatbot IDs are configured server-side
- No sensitive data exposed in client-side code
- Proper error boundaries and fallbacks
- Session storage for chatbot state management
