var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarImage: () => AvatarImage,
  Badge: () => Badge,
  Button: () => Button,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardPropsLayout: () => CardPropsLayout,
  CardTitle: () => CardTitle,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants
});
module.exports = __toCommonJS(index_exports);

// src/components/Avatar.tsx
var import_radix_ui = require("radix-ui");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/Avatar.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Avatar({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Avatar.Root,
    {
      "data-slot": "avatar",
      className: cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className),
      ...props
    }
  );
}
function AvatarImage({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Avatar.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full object-cover", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.Avatar.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn("bg-muted flex size-full items-center justify-center rounded-full", className),
      ...props
    }
  );
}

// src/components/Badge.tsx
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime2 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center rounded-sm border px-2 h-5 text-[10px] font-bold tracking-wider uppercase w-fit whitespace-nowrap shrink-0 gap-1.5 transition-colors overflow-hidden [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground rounded-md",
        secondary: "border-transparent bg-secondary text-secondary-foreground bg-opacity-50 dark:bg-opacity-30 rounded-md",
        outline: "border-zinc-800 bg-zinc-950 text-zinc-400 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "data-slot": "badge", className: cn(badgeVariants({ variant, className })), ...props });
}

// src/components/Button.tsx
var import_class_variance_authority2 = require("class-variance-authority");
var import_radix_ui2 = require("radix-ui");
var import_jsx_runtime3 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority2.cva)(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap no-underline transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 gap-2 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-10 gap-2 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        icon: "size-8",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_radix_ui2.Slot.Root : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/interface/Card.ts
var CardPropsLayout = {
  VERTICAL: "vertical",
  HORIZONTAL: "horizontal"
};

// src/components/Card.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Card({
  className,
  layout = CardPropsLayout.VERTICAL,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground rounded-xl border border-border/70 p-6 shadow-sm",
        layout === CardPropsLayout.VERTICAL && "flex flex-col gap-6",
        layout === CardPropsLayout.HORIZONTAL && "flex flex-row items-center justify-between gap-6",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
      "data-slot": "card-header",
      className: cn("grid auto-rows-min grid-rows-[auto_auto] gap-12", className),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
      "data-slot": "card-title",
      className: cn("text-lg leading-snug font-semibold tracking-tight", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm leading-6", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { "data-slot": "card-content", className: cn("px-7 py-7", className), ...props });
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { "data-slot": "card-footer", className: cn("flex items-center", className), ...props });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardPropsLayout,
  CardTitle,
  badgeVariants,
  buttonVariants
});
