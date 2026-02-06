## Error Type
Console Error

## Error Message
`DialogContent` requires a `DialogTitle` for the component to be accessible for screen reader users.

If you want to hide the `DialogTitle`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/dialog


    at SheetContent (src/components/ui/sheet.tsx:58:7)
    at SheetPortal (src/components/ui/sheet.tsx:28:10)
    at SheetContent (src/components/ui/sheet.tsx:56:5)
    at MobileNavPremium (src/components/layout/MobileNavPremium.tsx:34:13)
    at Header (src/components/layout/Header.tsx:67:5)
    at RootLayout (src\app\layout.tsx:117:6)

## Code Frame
  56 |     <SheetPortal>
  57 |       <SheetOverlay />
> 58 |       <SheetPrimitive.Content
     |       ^
  59 |         data-slot="sheet-content"
  60 |         className={cn(
  61 |           "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",

Next.js version: 16.1.6 (Turbopack)
