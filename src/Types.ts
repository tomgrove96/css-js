export type display =
  | "inline"
  | "block"
  | "contents"
  | "flex"
  | "grid"
  | "inline-block"
  | "inline-flex"
  | "inline-grid"
  | "inline-table"
  | "list-item"
  | "run-in"
  | "table"
  | "table-caption"
  | "table-column-group"
  | "table-header-group"
  | "table-footer-group"
  | "table-row-group"
  | "table-cell"
  | "table-column"
  | "table-row"
  | "none"
  | "initial"
  | "inherit";

export type alignment = "start" | "end" | "center" | "left" | "right" | "normal";

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

export type position =
  | "static"
  | "absolute"
  | "fixed"
  | "relative"
  | "sticky"
  | "initial"
  | "inherit";

export type zIndex = "auto" | number | "initial" | "inherit";

export type overflow = "visible" | "hidden" | "clip" | "scroll" | "auto" | "initial" | "inherit";

export type fontStyle = "normal" | "italic" | "oblique" | "initial" | "inherit";
