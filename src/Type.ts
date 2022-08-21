// ui
export type appearance =
  | "normal"
  | "inherit"
  | "icon"
  | "window"
  | "desktop"
  | "work-space"
  | "document"
  | "tooltip"
  | "dialog"
  | "button"
  | "push-button"
  | "hyperlink"
  | "radio-button"
  | "checkbox"
  | "menu-item"
  | "tab"
  | "menu"
  | "menubar"
  | "pull-down-menu"
  | "pop-up-menu"
  | "list-menu"
  | "radio-group"
  | "checkbox-group"
  | "outline-tree"
  | "range"
  | "field"
  | "combo-box"
  | "signature"
  | "password";

export type cursor =
  | "auto"
  | "crosshair"
  | "default"
  | "pointer"
  | "move"
  | "e-resize"
  | "neresize"
  | "nw-resize"
  | "n-resize"
  | "se-resize"
  | "sw-resize"
  | "swresize"
  | "s-resize"
  | "w-resize"
  | "text"
  | "wait"
  | "help";

export type resize = "none" | "both" | "horizontal" | "vertical" | "inherit";

// text
export type textDirection = "ltr" | "rtl" | "inherit";
export type whitespace = "normal" | "pre" | "nowrap" | "pre-wrap" | "pre-line";
export type textAlign = "start" | "end" | "left" | "right" | "center" | "justify";
export type textDecoration = "none" | "underline" | "overline" | "line-thorugh" | "blink";
export type wordBreak = "normal" | "keep-all" | "loose" | "break-strict" | "break-all";
export type wordWrap = "normal" | "nowrap";

// font
export type fontFamily = "serif" | "sans-serif" | string;

export type fontWeight =
  | "normal"
  | "bold"
  | "bolder"
  | "lighter"
  | "inherit"
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type fontSize =
  | "xx-small"
  | "x-small"
  | "small"
  | "medium"
  | "large"
  | "x-large"
  | "xxlarge"
  | "smaller"
  | "larger"
  | "inherit"
  | unit;

export type fontStyle = "normal" | "italic" | "oblique" | "inherit";

// boxmodel
export type display =
  | "none"
  | "inline"
  | "block"
  | "inline-block"
  | "flex"
  | "inline-flex"
  | "grid"
  | "inline-grid"
  | "contents"
  | "list-item"
  | "run-in"
  | "compact"
  | "table"
  | "inline-table"
  | "table-row-group"
  | "table-header-group"
  | "table-footer-group"
  | "table-row"
  | "table-column-group"
  | "table-column"
  | "table-cell"
  | "table-caption"
  | "ruby"
  | "ruby-base"
  | "ruby-text"
  | "ruby-base-group"
  | "ruby-text-group";

export type overflow =
  | "visible"
  | "hidden"
  | "scroll"
  | "auto"
  | "no-display"
  | "no-content"
  | "overflow-x"
  | "overflow-y";

export type overflowStyle = "auto" | "marquee-line" | "marqueeblock";

export type visibility = "visible" | "hidden" | "collapse";

// background
export type backgroundSize = "auto" | "cover" | "contain" | unit;
export type backgroundRepeat = "repeat" | "repeat-x" | "repeat-y" | "no-repeat";
export type backgroundAttachment = "scroll" | "fixed" | "local";
export type backgroundOrigin = "border-box" | "padding-box" | "content-box";
export type backgroundClip = "border-box" | "padding-box" | "content-box" | "no-clip";

// border
export type borderWidth = "thin" | "medium" | "thick" | px | pt | cm;

export type borderStyle =
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset"
  | "none"
  | "hidden";

// ----------------

export type px = `${number}px`;
export type pt = `${number}pt`;
export type cm = `${number}cm`;

export type uom =
  | "cm"
  | "mm"
  | "in"
  | "px"
  | "pt"
  | "pc"
  | "em"
  | "ex"
  | "ch"
  | "rem"
  | "vw"
  | "vh"
  | "vmin"
  | "vmax"
  | "%";

export type unit = `${number}${uom}`;

export type propType = Map<string, string | string[] | number | Object[]>;

export interface eventDef {
  componentId: string;
  cb: (e: Event) => void;
}
