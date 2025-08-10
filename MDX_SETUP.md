# MDX Setup Documentation

After refactoring, here's how to create new MDX blog posts:

## Creating a new MDX page

1. Create a new `.mdx` file in your desired location (e.g., `app/blog/my-post/page.mdx`)

2. Import the `MdxPage` component and optionally the `createMdxMetadata` helper:

```tsx
import MdxPage, { createMdxMetadata } from '../../../components/MdxPage';

export const metadata = createMdxMetadata({
    title: 'My Blog Post Title',
    description: 'A description of my blog post'
});

<MdxPage backHref="/" backText="← Back to Home">

# Your Content Here

Write your MDX content here...

</MdxPage>
```

## MdxPage Component Props

- `backHref`: The URL to navigate back to (default: "/")
- `backText`: The text for the back link (default: "← Back to Home")
- `showBackLink`: Whether to show the back link (default: true)

## Examples

### Basic usage:
```tsx
<MdxPage>
# My Post
Content here...
</MdxPage>
```

### Custom back link:
```tsx
<MdxPage backHref="/blog" backText="← Back to Blog">
# My Post
Content here...
</MdxPage>
```

### No back link:
```tsx
<MdxPage showBackLink={false}>
# My Post
Content here...
</MdxPage>
```

## Benefits of this approach:

1. **No layout.tsx needed**: Each MDX file controls its own layout
2. **Flexible metadata**: Use the helper function or define metadata directly
3. **Customizable**: Each page can have different back links or no back link
4. **Type-safe**: Full TypeScript support
5. **Consistent styling**: All pages use the same base styling but can be customized per page
