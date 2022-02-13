import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
  abbr,
  address,
  article,
  aside,
  audio,
  b,
  blockquote,
  body,
  body div,
  caption,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  dl,
  dt,
  em,
  fieldset,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  p,
  pre,
  q,
  samp,
  section,
  small,
  span,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  ul,
  var,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: 400;
    vertical-align: baseline;
    background: 0 0
  }

  article,
  aside,
  details,
  figure,
  footer,
  header,
  main,
  nav,
  section,
  summary {
    display: block
  }

  html {
    box-sizing: border-box
  }

  *,
  :after,
  :before {
    box-sizing: inherit
  }

  embed,
  img,
  object {
    max-width: 100%
  }

  html {
    overflow-y: scroll
  }

  ul {
    list-style: none
  }

  blockquote,
  q {
    quotes: none
  }

  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: '';
    content: none
  }

  a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: 0 0
  }

  del {
    text-decoration: line-through
  }

  abbr[title],
  dfn[title] {
    border-bottom: 1px dotted #000;
    cursor: help
  }

  table {
    border-collapse: separate;
    border-spacing: 0
  }

  th {
    font-weight: 700;
    vertical-align: bottom
  }

  td {
    font-weight: 400;
    vertical-align: top
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0
  }

  input,
  select {
    vertical-align: middle
  }

  pre {
    white-space: pre;
    white-space: pre-wrap;
    white-space: pre-line;
    word-wrap: break-word
  }

  input[type=radio] {
    vertical-align: text-bottom
  }

  input[type=checkbox] {
    vertical-align: bottom
  }

  .ie7 input[type=checkbox] {
    vertical-align: baseline
  }

  .ie6 input {
    vertical-align: text-bottom
  }

  input,
  select,
  textarea {
    font: 99% sans-serif
  }

  table {
    font-size: inherit;
    font: 100%
  }

  small {
    font-size: 85%
  }

  strong {
    font-weight: 700
  }

  td,
  td img {
    vertical-align: top
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative
  }

  sup {
    top: -.5em
  }

  sub {
    bottom: -.25em
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, sans-serif
  }

  .clickable,
  button,
  input[type=button],
  input[type=file],
  input[type=submit],
  label {
    cursor: pointer
  }

  button,
  input,
  select,
  textarea {
    margin: 0
  }

  button,
  input[type=button] {
    width: auto;
    overflow: visible
  }

  .ie7 img {
    -ms-interpolation-mode: bicubic
  }

  .clearfix:after {
    content: " ";
    display: block;
    clear: both
  }
`;
