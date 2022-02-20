import { Property } from "csstype";
import React from "react";
import styled from "styled-components";
import {
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  ResponsiveValue,
  space,
  SpaceProps,
  Theme,
  TLengthStyledSystem,
} from "styled-system";

export interface BoxProps extends ColorProps, LayoutProps, SpaceProps {}

export const _Box = styled.div<BoxProps>`
  ${compose(space, layout, color)}
`;

export const Box = (
  args: JSX.IntrinsicAttributes & {
    p?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    slot?: string | undefined;
    style?: React.CSSProperties | undefined;
    title?: string | undefined;
    ref?:
      | ((instance: HTMLDivElement | null) => void)
      | React.RefObject<HTMLDivElement>
      | null
      | undefined;
    key?: React.Key | null | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    className?: string | undefined;
    contentEditable?: (boolean | "true" | "false") | "inherit" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    placeholder?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    tabIndex?: number | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    role?: React.AriaRole | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?:
      | (string &
          ResponsiveValue<
            string | number | symbol,
            Required<Theme<TLengthStyledSystem>>
          >)
      | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?:
      | "text"
      | "search"
      | "none"
      | "tel"
      | "url"
      | "email"
      | "numeric"
      | "decimal"
      | undefined;
    is?: string | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: (boolean | "true" | "false") | undefined;
    "aria-autocomplete"?: "list" | "none" | "inline" | "both" | undefined;
    "aria-busy"?: (boolean | "true" | "false") | undefined;
    "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?:
      | boolean
      | "time"
      | "true"
      | "false"
      | "page"
      | "step"
      | "location"
      | "date"
      | undefined;
    "aria-describedby"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: (boolean | "true" | "false") | undefined;
    "aria-dropeffect"?:
      | "link"
      | "none"
      | "copy"
      | "execute"
      | "move"
      | "popup"
      | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: (boolean | "true" | "false") | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: (boolean | "true" | "false") | undefined;
    "aria-haspopup"?:
      | boolean
      | "dialog"
      | "menu"
      | "true"
      | "false"
      | "grid"
      | "listbox"
      | "tree"
      | undefined;
    "aria-hidden"?: (boolean | "true" | "false") | undefined;
    "aria-invalid"?:
      | boolean
      | "true"
      | "false"
      | "grammar"
      | "spelling"
      | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: (boolean | "true" | "false") | undefined;
    "aria-multiline"?: (boolean | "true" | "false") | undefined;
    "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined;
    "aria-readonly"?: (boolean | "true" | "false") | undefined;
    "aria-relevant"?:
      | "text"
      | "additions"
      | "additions removals"
      | "additions text"
      | "all"
      | "removals"
      | "removals additions"
      | "removals text"
      | "text additions"
      | "text removals"
      | undefined;
    "aria-required"?: (boolean | "true" | "false") | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: (boolean | "true" | "false") | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    children?: React.ReactNode;
    dangerouslySetInnerHTML?: { __html: string } | undefined;
    onCopy?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCopyCapture?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCut?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCutCapture?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onPaste?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onPasteCapture?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCompositionEnd?:
      | React.CompositionEventHandler<HTMLDivElement>
      | undefined;
    onCompositionEndCapture?:
      | React.CompositionEventHandler<HTMLDivElement>
      | undefined;
    onCompositionStart?:
      | React.CompositionEventHandler<HTMLDivElement>
      | undefined;
    onCompositionStartCapture?:
      | React.CompositionEventHandler<HTMLDivElement>
      | undefined;
    onCompositionUpdate?:
      | React.CompositionEventHandler<HTMLDivElement>
      | undefined;
    onCompositionUpdateCapture?:
      | React.CompositionEventHandler<HTMLDivElement>
      | undefined;
    onFocus?: React.FocusEventHandler<HTMLDivElement> | undefined;
    onFocusCapture?: React.FocusEventHandler<HTMLDivElement> | undefined;
    onBlur?: React.FocusEventHandler<HTMLDivElement> | undefined;
    onBlurCapture?: React.FocusEventHandler<HTMLDivElement> | undefined;
    onChange?: React.FormEventHandler<HTMLDivElement> | undefined;
    onChangeCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onBeforeInput?: React.FormEventHandler<HTMLDivElement> | undefined;
    onBeforeInputCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onInput?: React.FormEventHandler<HTMLDivElement> | undefined;
    onInputCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onReset?: React.FormEventHandler<HTMLDivElement> | undefined;
    onResetCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onSubmit?: React.FormEventHandler<HTMLDivElement> | undefined;
    onSubmitCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onInvalid?: React.FormEventHandler<HTMLDivElement> | undefined;
    onInvalidCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onLoad?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onError?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onErrorCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyDownCapture?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyPress?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyPressCapture?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyUp?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyUpCapture?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onAbort?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onAbortCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlay?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayThrough?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayThroughCapture?:
      | React.ReactEventHandler<HTMLDivElement>
      | undefined;
    onDurationChange?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onDurationChangeCapture?:
      | React.ReactEventHandler<HTMLDivElement>
      | undefined;
    onEmptied?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEmptiedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEncrypted?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEncryptedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEnded?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEndedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedData?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedDataCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadata?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadataCapture?:
      | React.ReactEventHandler<HTMLDivElement>
      | undefined;
    onLoadStart?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadStartCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPause?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPauseCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPlay?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPlayCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPlaying?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPlayingCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onProgress?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onProgressCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onRateChange?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onRateChangeCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSeeked?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSeekedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSeeking?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSeekingCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onStalled?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onStalledCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSuspend?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSuspendCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onTimeUpdate?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onTimeUpdateCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onVolumeChange?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onVolumeChangeCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onWaiting?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onWaitingCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onAuxClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onAuxClickCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onClickCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onContextMenu?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onContextMenuCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onDoubleClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onDoubleClickCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onDrag?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragEnd?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragEndCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragEnter?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragEnterCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragExit?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragExitCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragLeave?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragLeaveCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragOver?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragOverCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragStart?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragStartCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDrop?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDropCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onMouseDown?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseDownCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseMove?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseMoveCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOut?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOutCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOver?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOverCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseUp?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseUpCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onSelect?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSelectCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onTouchCancel?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchCancelCapture?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchEnd?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchEndCapture?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchMove?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchMoveCapture?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStart?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStartCapture?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onPointerDown?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerDownCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerMove?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerMoveCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerUp?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerUpCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerCancel?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerCancelCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerEnter?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerEnterCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerLeave?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerLeaveCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerOver?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOverCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerOut?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOutCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onGotPointerCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onGotPointerCaptureCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onLostPointerCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onLostPointerCaptureCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onScroll?: React.UIEventHandler<HTMLDivElement> | undefined;
    onScrollCapture?: React.UIEventHandler<HTMLDivElement> | undefined;
    onWheel?: React.WheelEventHandler<HTMLDivElement> | undefined;
    onWheelCapture?: React.WheelEventHandler<HTMLDivElement> | undefined;
    onAnimationStart?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationStartCapture?:
      | React.AnimationEventHandler<HTMLDivElement>
      | undefined;
    onAnimationEnd?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationEndCapture?:
      | React.AnimationEventHandler<HTMLDivElement>
      | undefined;
    onAnimationIteration?:
      | React.AnimationEventHandler<HTMLDivElement>
      | undefined;
    onAnimationIterationCapture?:
      | React.AnimationEventHandler<HTMLDivElement>
      | undefined;
    onTransitionEnd?: React.TransitionEventHandler<HTMLDivElement> | undefined;
    onTransitionEndCapture?:
      | React.TransitionEventHandler<HTMLDivElement>
      | undefined;
    width?:
      | ResponsiveValue<
          Property.Width<TLengthStyledSystem>,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    height?:
      | ResponsiveValue<
          Property.Height<TLengthStyledSystem>,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    minWidth?:
      | ResponsiveValue<
          Property.MinWidth<TLengthStyledSystem>,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    minHeight?:
      | ResponsiveValue<
          Property.MinHeight<TLengthStyledSystem>,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    maxWidth?:
      | ResponsiveValue<
          Property.MaxWidth<TLengthStyledSystem>,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    maxHeight?:
      | ResponsiveValue<
          Property.MaxHeight<TLengthStyledSystem>,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    display?:
      | ResponsiveValue<Property.Display, Required<Theme<TLengthStyledSystem>>>
      | undefined;
    verticalAlign?:
      | ResponsiveValue<
          Property.VerticalAlign<TLengthStyledSystem>,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    size?:
      | ResponsiveValue<
          Property.Height<TLengthStyledSystem>,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    overflow?:
      | ResponsiveValue<Property.Overflow, Required<Theme<TLengthStyledSystem>>>
      | undefined;
    overflowX?:
      | ResponsiveValue<
          Property.OverflowX,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    overflowY?:
      | ResponsiveValue<
          Property.OverflowY,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    bg?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    backgroundColor?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    opacity?:
      | ResponsiveValue<Property.Opacity, Required<Theme<TLengthStyledSystem>>>
      | undefined;
    m?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    margin?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    mt?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    marginTop?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    mr?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    marginRight?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    mb?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    marginBottom?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    ml?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    marginLeft?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    mx?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    marginX?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    my?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    marginY?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    padding?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    pt?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    paddingTop?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    pr?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    paddingRight?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    pb?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    paddingBottom?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    pl?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    paddingLeft?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    px?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    paddingX?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    py?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
    paddingY?:
      | ResponsiveValue<
          string | number | symbol,
          Required<Theme<TLengthStyledSystem>>
        >
      | undefined;
  } & { theme?: any } & { as?: undefined; forwardedAs?: undefined }
) => <_Box {...args} />;

_Box.defaultProps = {
  backgroundColor: "red",
  width: "100px",
  height: "100px",
};
