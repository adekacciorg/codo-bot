
export const style: string = /*html*/`
<style>
.snackbar {
	visibility: hidden;
	min-width: 250px;
	margin-left: -125px;
	background-color: #333;
	color: #fff;
	text-align: center;
	border-radius: 2px;
	padding: 16px;
	position: fixed;
	z-index: 1;
	left: 50%;
	bottom: 30px
}

.snackbar.show {
	visibility: visible;
	animation: fadein .5s, fadeout .5s 2.5s
}

@keyframes fadein {
	0% {
		bottom: 0;
		opacity: 0
	}

	to {
		bottom: 30px;
		opacity: 1
	}
}

@keyframes fadeout {
	0% {
		bottom: 30px;
		opacity: 1
	}

	to {
		bottom: 0;
		opacity: 0
	}
}

*,
:before,
:after {
	--tw-border-spacing-x: 0;
	--tw-border-spacing-y: 0;
	--tw-translate-x: 0;
	--tw-translate-y: 0;
	--tw-rotate: 0;
	--tw-skew-x: 0;
	--tw-skew-y: 0;
	--tw-scale-x: 1;
	--tw-scale-y: 1;
	--tw-pan-x: ;
	--tw-pan-y: ;
	--tw-pinch-zoom: ;
	--tw-scroll-snap-strictness: proximity;
	--tw-gradient-from-position: ;
	--tw-gradient-via-position: ;
	--tw-gradient-to-position: ;
	--tw-ordinal: ;
	--tw-slashed-zero: ;
	--tw-numeric-figure: ;
	--tw-numeric-spacing: ;
	--tw-numeric-fraction: ;
	--tw-ring-inset: ;
	--tw-ring-offset-width: 0px;
	--tw-ring-offset-color: #fff;
	--tw-ring-color: rgb(59 130 246 / .5);
	--tw-ring-offset-shadow: 0 0 #0000;
	--tw-ring-shadow: 0 0 #0000;
	--tw-shadow: 0 0 #0000;
	--tw-shadow-colored: 0 0 #0000;
	--tw-blur: ;
	--tw-brightness: ;
	--tw-contrast: ;
	--tw-grayscale: ;
	--tw-hue-rotate: ;
	--tw-invert: ;
	--tw-saturate: ;
	--tw-sepia: ;
	--tw-drop-shadow: ;
	--tw-backdrop-blur: ;
	--tw-backdrop-brightness: ;
	--tw-backdrop-contrast: ;
	--tw-backdrop-grayscale: ;
	--tw-backdrop-hue-rotate: ;
	--tw-backdrop-invert: ;
	--tw-backdrop-opacity: ;
	--tw-backdrop-saturate: ;
	--tw-backdrop-sepia: ;
	--tw-contain-size: ;
	--tw-contain-layout: ;
	--tw-contain-paint: ;
	--tw-contain-style:
}

::backdrop {
	--tw-border-spacing-x: 0;
	--tw-border-spacing-y: 0;
	--tw-translate-x: 0;
	--tw-translate-y: 0;
	--tw-rotate: 0;
	--tw-skew-x: 0;
	--tw-skew-y: 0;
	--tw-scale-x: 1;
	--tw-scale-y: 1;
	--tw-pan-x: ;
	--tw-pan-y: ;
	--tw-pinch-zoom: ;
	--tw-scroll-snap-strictness: proximity;
	--tw-gradient-from-position: ;
	--tw-gradient-via-position: ;
	--tw-gradient-to-position: ;
	--tw-ordinal: ;
	--tw-slashed-zero: ;
	--tw-numeric-figure: ;
	--tw-numeric-spacing: ;
	--tw-numeric-fraction: ;
	--tw-ring-inset: ;
	--tw-ring-offset-width: 0px;
	--tw-ring-offset-color: #fff;
	--tw-ring-color: rgb(59 130 246 / .5);
	--tw-ring-offset-shadow: 0 0 #0000;
	--tw-ring-shadow: 0 0 #0000;
	--tw-shadow: 0 0 #0000;
	--tw-shadow-colored: 0 0 #0000;
	--tw-blur: ;
	--tw-brightness: ;
	--tw-contrast: ;
	--tw-grayscale: ;
	--tw-hue-rotate: ;
	--tw-invert: ;
	--tw-saturate: ;
	--tw-sepia: ;
	--tw-drop-shadow: ;
	--tw-backdrop-blur: ;
	--tw-backdrop-brightness: ;
	--tw-backdrop-contrast: ;
	--tw-backdrop-grayscale: ;
	--tw-backdrop-hue-rotate: ;
	--tw-backdrop-invert: ;
	--tw-backdrop-opacity: ;
	--tw-backdrop-saturate: ;
	--tw-backdrop-sepia: ;
	--tw-contain-size: ;
	--tw-contain-layout: ;
	--tw-contain-paint: ;
	--tw-contain-style:
}

*,
:before,
:after {
	box-sizing: border-box;
	border-width: 0;
	border-style: solid;
	border-color: #e5e7eb
}

:before,
:after {
	--tw-content: ""
}

html,
:host {
	line-height: 1.5;
	-webkit-text-size-adjust: 100%;
	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;
	font-family: Inter, sans-serif;
	font-feature-settings: normal;
	font-variation-settings: normal;
	-webkit-tap-highlight-color: transparent
}

body {
	margin: 0;
	line-height: inherit
}

hr {
	height: 0;
	color: inherit;
	border-top-width: 1px
}

abbr:where([title]) {
	-webkit-text-decoration: underline dotted;
	text-decoration: underline dotted
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-size: inherit;
	font-weight: inherit
}

a {
	color: inherit;
	text-decoration: inherit
}

b,
strong {
	font-weight: bolder
}

code,
kbd,
samp,
pre {
	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
	font-feature-settings: normal;
	font-variation-settings: normal;
	font-size: 1em
}

small {
	font-size: 80%
}

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline
}

sub {
	bottom: -.25em
}

sup {
	top: -.5em
}

table {
	text-indent: 0;
	border-color: inherit;
	border-collapse: collapse
}

button,
input,
optgroup,
select,
textarea {
	font-family: inherit;
	font-feature-settings: inherit;
	font-variation-settings: inherit;
	font-size: 100%;
	font-weight: inherit;
	line-height: inherit;
	letter-spacing: inherit;
	color: inherit;
	margin: 0;
	padding: 0
}

button,
select {
	text-transform: none
}

button,
input:where([type=button]),
input:where([type=reset]),
input:where([type=submit]) {
	-webkit-appearance: button;
	appearance: button;
	background-color: transparent;
	background-image: none
}

:-moz-focusring {
	outline: auto
}

:-moz-ui-invalid {
	box-shadow: none
}

progress {
	vertical-align: baseline
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
	height: auto
}

[type=search] {
	-webkit-appearance: textfield;
	appearance: textfield;
	outline-offset: -2px
}

::-webkit-search-decoration {
	-webkit-appearance: none
}

::-webkit-file-upload-button {
	-webkit-appearance: button;
	font: inherit
}

summary {
	display: list-item
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
	margin: 0
}

fieldset {
	margin: 0;
	padding: 0
}

legend {
	padding: 0
}

ol,
ul,
menu {
	list-style: none;
	margin: 0;
	padding: 0
}

dialog {
	padding: 0
}

textarea {
	resize: vertical
}

input::-moz-placeholder,
textarea::-moz-placeholder {
	opacity: 1;
	color: #9ca3af
}

input::placeholder,
textarea::placeholder {
	opacity: 1;
	color: #9ca3af
}

button,
[role=button] {
	cursor: pointer
}

:disabled {
	cursor: default
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
	display: block;
	vertical-align: middle;
}

img,
video {
	max-width: 100%;
	height: auto
}

[hidden] {
	display: none
}

.container {
	width: 100%
}

@media (min-width: 640px) {
	.container {
		max-width: 640px
	}
}

@media (min-width: 768px) {
	.container {
		max-width: 768px
	}
}

@media (min-width: 1024px) {
	.container {
		max-width: 1024px
	}
}

@media (min-width: 1280px) {
	.container {
		max-width: 1280px
	}
}

@media (min-width: 1536px) {
	.container {
		max-width: 1536px
	}
}

.fixed {
	position: fixed
}

.absolute {
	position: absolute
}

.relative {
	position: relative
}

.inset-0 {
	top: 0;
	right: 0;
	bottom: 0;
	left: 0
}

.bottom-4 {
	bottom: 1rem
}

.bottom-\[-30\%\] {
	bottom: -30%
}

.left-1\/2 {
	left: 50%
}

.left-24 {
	left: 6rem
}

.left-4 {
	left: 1rem
}

.right-0 {
	right: 0
}

.right-4 {
	right: 1rem
}

.top-0 {
	top: 0
}

.top-1\/2 {
	top: 50%
}

.top-24 {
	top: 6rem
}

.top-48 {
	top: 12rem
}

.z-0 {
	z-index: 0
}

.z-10 {
	z-index: 10
}

.z-20 {
	z-index: 20
}

.z-30 {
	z-index: 30
}

.z-40 {
	z-index: 40
}

.z-50 {
	z-index: 50
}

.mx-auto {
	margin-left: auto;
	margin-right: auto
}

.mb-1 {
	margin-bottom: .25rem
}

.mb-12 {
	margin-bottom: 3rem
}

.mb-2 {
	margin-bottom: .5rem
}

.mb-4 {
	margin-bottom: 1rem
}

.mb-6 {
	margin-bottom: 1.5rem
}

.mb-8 {
	margin-bottom: 2rem
}

.mr-2 {
	margin-right: .5rem
}

.mr-\[8\%\] {
	margin-right: 8%
}

.mt-2 {
	margin-top: .5rem
}

.mt-4 {
	margin-top: 1rem
}

.mt-8 {
	margin-top: 2rem
}

.mt-\[3\%\] {
	margin-top: 3%
}

.block {
	display: block
}

.flex {
	display: flex
}

.inline-flex {
	display: inline-flex
}

.grid {
	display: grid
}

.hidden {
	display: none
}

.aspect-\[16\/9\] {
	aspect-ratio: 16/9
}

.h-2 {
	height: .5rem
}

.h-3 {
	height: .75rem
}

.h-5 {
	height: 1.25rem
}

.h-6 {
	height: 1.5rem
}

.h-60 {
	height: 15rem
}

.h-\[1px\] {
	height: 1px
}

.h-\[200px\] {
	height: 200px
}

.h-\[400px\] {
	height: 400px
}

.h-full {
	height: 100%
}

.h-max {
	height: -moz-max-content;
	height: max-content
}

.max-h-screen {
	max-height: 100vh
}

.min-h-screen {
	min-height: 100vh
}

.w-2 {
	width: .5rem
}

.w-3 {
	width: .75rem
}

.w-5 {
	width: 1.25rem
}

.w-6 {
	width: 1.5rem
}

.w-60 {
	width: 15rem
}

.w-64 {
	width: 16rem
}

.w-\[80\%\] {
	width: 80%
}

.w-full {
	width: 100%
}

.max-w-2xl {
	max-width: 42rem
}

.max-w-6xl {
	max-width: 72rem
}

.max-w-7xl {
	max-width: 80rem
}

.max-w-xl {
	max-width: 36rem
}

.-translate-x-1\/2 {
	--tw-translate-x: -50%;
	transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.-translate-y-1\/2 {
	--tw-translate-y: -50%;
	transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.translate-x-0 {
	--tw-translate-x: 0px;
	transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.translate-x-full {
	--tw-translate-x: 100%;
	transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.-rotate-12 {
	--tw-rotate: -12deg;
	transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.-rotate-6 {
	--tw-rotate: -6deg;
	transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.rotate-3 {
	--tw-rotate: 3deg;
	transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.transform {
	transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.cursor-pointer {
	cursor: pointer
}

.grid-cols-1 {
	grid-template-columns: repeat(1, minmax(0, 1fr))
}

.grid-cols-2 {
	grid-template-columns: repeat(2, minmax(0, 1fr))
}

.flex-col {
	flex-direction: column
}

.items-start {
	align-items: flex-start
}

.items-center {
	align-items: center
}

.justify-end {
	justify-content: flex-end
}

.justify-center {
	justify-content: center
}

.justify-between {
	justify-content: space-between
}

.gap-12 {
	gap: 3rem
}

.gap-2 {
	gap: .5rem
}

.gap-20 {
	gap: 5rem
}

.gap-4 {
	gap: 1rem
}

.gap-6 {
	gap: 1.5rem
}

.space-x-3>:not([hidden])~:not([hidden]) {
	--tw-space-x-reverse: 0;
	margin-right: calc(.75rem * var(--tw-space-x-reverse));
	margin-left: calc(.75rem * calc(1 - var(--tw-space-x-reverse)))
}

.space-x-4>:not([hidden])~:not([hidden]) {
	--tw-space-x-reverse: 0;
	margin-right: calc(1rem * var(--tw-space-x-reverse));
	margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)))
}

.space-y-3>:not([hidden])~:not([hidden]) {
	--tw-space-y-reverse: 0;
	margin-top: calc(.75rem * calc(1 - var(--tw-space-y-reverse)));
	margin-bottom: calc(.75rem * var(--tw-space-y-reverse))
}

.space-y-4>:not([hidden])~:not([hidden]) {
	--tw-space-y-reverse: 0;
	margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
	margin-bottom: calc(1rem * var(--tw-space-y-reverse))
}

.space-y-6>:not([hidden])~:not([hidden]) {
	--tw-space-y-reverse: 0;
	margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
	margin-bottom: calc(1.5rem * var(--tw-space-y-reverse))
}

.space-y-8>:not([hidden])~:not([hidden]) {
	--tw-space-y-reverse: 0;
	margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
	margin-bottom: calc(2rem * var(--tw-space-y-reverse))
}

.self-start {
	align-self: flex-start
}

.overflow-hidden {
	overflow: hidden
}

.rounded-2xl {
	border-radius: 1rem
}

.rounded-full {
	border-radius: 9999px
}

.rounded-lg {
	border-radius: .5rem
}

.rounded-md {
	border-radius: .375rem
}

.border {
	border-width: 1px
}

.border-b {
	border-bottom-width: 1px
}

.border-t {
	border-top-width: 1px
}

.border-gray-700 {
	--tw-border-opacity: 1;
	border-color: rgb(55 65 81 / var(--tw-border-opacity))
}

.border-gray-800 {
	--tw-border-opacity: 1;
	border-color: rgb(31 41 55 / var(--tw-border-opacity))
}

.border-slate-600 {
	--tw-border-opacity: 1;
	border-color: rgb(71 85 105 / var(--tw-border-opacity))
}

.border-surface-light\/10 {
	border-color: #1118271a
}

.border-surface-light\/20 {
	border-color: #11182733
}

.border-transparent {
	border-color: transparent
}

.bg-accent-mint\/20 {
	background-color: #00f5d433
}

.bg-accent-pink {
	--tw-bg-opacity: 1;
	background-color: rgb(255 46 99 / var(--tw-bg-opacity))
}

.bg-black {
	--tw-bg-opacity: 1;
	background-color: rgb(0 0 0 / var(--tw-bg-opacity))
}

.bg-black\/50 {
	background-color: #00000080
}

.bg-blue-400 {
	--tw-bg-opacity: 1;
	background-color: rgb(96 165 250 / var(--tw-bg-opacity))
}

.bg-blue-500\/50 {
	background-color: #3b82f680
}

.bg-gray-800 {
	--tw-bg-opacity: 1;
	background-color: rgb(31 41 55 / var(--tw-bg-opacity))
}

.bg-gray-950 {
	--tw-bg-opacity: 1;
	background-color: rgb(3 7 18 / var(--tw-bg-opacity))
}

.bg-indigo-600 {
	--tw-bg-opacity: 1;
	background-color: rgb(79 70 229 / var(--tw-bg-opacity))
}

.bg-primary {
	--tw-bg-opacity: 1;
	background-color: rgb(255 255 255 / var(--tw-bg-opacity))
}

.bg-secondary\/10 {
	background-color: #9a43ba1a
}

.bg-slate-700\/50 {
	background-color: #33415580
}

.bg-surface-dark {
	--tw-bg-opacity: 1;
	background-color: rgb(0 0 0 / var(--tw-bg-opacity))
}

.bg-surface-dark\/80 {
	background-color: #000c
}

.bg-surface-light {
	--tw-bg-opacity: 1;
	background-color: rgb(17 24 39 / var(--tw-bg-opacity))
}

.bg-white {
	--tw-bg-opacity: 1;
	background-color: rgb(255 255 255 / var(--tw-bg-opacity))
}

.bg-white\/30 {
	background-color: #ffffff4d
}

.bg-opacity-50 {
	--tw-bg-opacity: .5
}

.bg-gradient-to-r {
	background-image: linear-gradient(to right, var(--tw-gradient-stops))
}

.from-blue-500 {
	--tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);
	--tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);
	--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)
}

.to-sky-500 {
	--tw-gradient-to: #0ea5e9 var(--tw-gradient-to-position)
}

.bg-cover {
	background-size: cover
}

.bg-center {
	background-position: center
}

.bg-no-repeat {
	background-repeat: no-repeat
}

.object-cover {
	-o-object-fit: cover;
	object-fit: cover
}

.p-2 {
	padding: .5rem
}

.p-6 {
	padding: 1.5rem
}

.p-8 {
	padding: 2rem
}

.px-3 {
	padding-left: .75rem;
	padding-right: .75rem
}

.px-4 {
	padding-left: 1rem;
	padding-right: 1rem
}

.px-6 {
	padding-left: 1.5rem;
	padding-right: 1.5rem
}

.px-\[3\%\] {
	padding-left: 3%;
	padding-right: 3%
}

.py-1 {
	padding-top: .25rem;
	padding-bottom: .25rem
}

.py-12 {
	padding-top: 3rem;
	padding-bottom: 3rem
}

.py-2 {
	padding-top: .5rem;
	padding-bottom: .5rem
}

.py-20 {
	padding-top: 5rem;
	padding-bottom: 5rem
}

.py-24 {
	padding-top: 6rem;
	padding-bottom: 6rem
}

.py-3 {
	padding-top: .75rem;
	padding-bottom: .75rem
}

.py-4 {
	padding-top: 1rem;
	padding-bottom: 1rem
}

.py-6 {
	padding-top: 1.5rem;
	padding-bottom: 1.5rem
}

.pb-\[30px\] {
	padding-bottom: 30px
}

.pl-\[10\%\] {
	padding-left: 10%
}

.pl-\[5\%\] {
	padding-left: 5%
}

.pt-16 {
	padding-top: 4rem
}

.pt-8 {
	padding-top: 2rem
}

.font-display {
	font-family: Space Grotesk, sans-serif
}

.text-2xl {
	font-size: 1.5rem;
	line-height: 2rem
}

.text-3xl {
	font-size: 1.875rem;
	line-height: 2.25rem
}

.text-4xl {
	font-size: 2.25rem;
	line-height: 2.5rem
}

.text-5xl {
	font-size: 3rem;
	line-height: 1
}

.text-7xl {
	font-size: 4.5rem;
	line-height: 1
}

.text-base {
	font-size: 1rem;
	line-height: 1.5rem
}

.text-lg {
	font-size: 1.125rem;
	line-height: 1.75rem
}

.text-sm {
	font-size: .875rem;
	line-height: 1.25rem
}

.text-xl {
	font-size: 1.25rem;
	line-height: 1.75rem
}

.font-bold {
	font-weight: 700
}

.font-medium {
	font-weight: 500
}

.font-semibold {
	font-weight: 600
}

.leading-relaxed {
	line-height: 1.625
}

.leading-tight {
	line-height: 1.25
}

.text-accent-mint {
	--tw-text-opacity: 1;
	color: rgb(0 245 212 / var(--tw-text-opacity))
}

.text-accent-orange\/70 {
	color: #ff9f1cb3
}

.text-accent-pink {
	--tw-text-opacity: 1;
	color: rgb(255 46 99 / var(--tw-text-opacity))
}

.text-accent-pink\/90 {
	color: #ff2e63e6
}

.text-blue-100 {
	--tw-text-opacity: 1;
	color: rgb(219 234 254 / var(--tw-text-opacity))
}

.text-blue-400 {
	--tw-text-opacity: 1;
	color: rgb(96 165 250 / var(--tw-text-opacity))
}

.text-gray-100 {
	--tw-text-opacity: 1;
	color: rgb(243 244 246 / var(--tw-text-opacity))
}

.text-gray-300 {
	--tw-text-opacity: 1;
	color: rgb(209 213 219 / var(--tw-text-opacity))
}

.text-gray-400 {
	--tw-text-opacity: 1;
	color: rgb(156 163 175 / var(--tw-text-opacity))
}

.text-indigo-400 {
	--tw-text-opacity: 1;
	color: rgb(129 140 248 / var(--tw-text-opacity))
}

.text-primary {
	--tw-text-opacity: 1;
	color: rgb(255 255 255 / var(--tw-text-opacity))
}

.text-secondary {
	--tw-text-opacity: 1;
	color: rgb(154 67 186 / var(--tw-text-opacity))
}

.text-slate-300 {
	--tw-text-opacity: 1;
	color: rgb(203 213 225 / var(--tw-text-opacity))
}

.text-white {
	--tw-text-opacity: 1;
	color: rgb(255 255 255 / var(--tw-text-opacity))
}

.placeholder-gray-500::-moz-placeholder {
	--tw-placeholder-opacity: 1;
	color: rgb(107 114 128 / var(--tw-placeholder-opacity))
}

.placeholder-gray-500::placeholder {
	--tw-placeholder-opacity: 1;
	color: rgb(107 114 128 / var(--tw-placeholder-opacity))
}

.shadow-2xl {
	--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);
	--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

.shadow-glow {
	--tw-shadow: 0 0 20px rgba(108, 99, 255, .2);
	--tw-shadow-colored: 0 0 20px var(--tw-shadow-color);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

.shadow-lg {
	--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
	--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

.shadow-md {
	--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);
	--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

.shadow-xl {
	--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);
	--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

.backdrop-blur-lg {
	--tw-backdrop-blur: blur(16px);
	-webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
	backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)
}

.transition-all {
	transition-property: all;
	transition-timing-function: cubic-bezier(.4, 0, .2, 1);
	transition-duration: .15s
}

.transition-colors {
	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
	transition-timing-function: cubic-bezier(.4, 0, .2, 1);
	transition-duration: .15s
}

.transition-opacity {
	transition-property: opacity;
	transition-timing-function: cubic-bezier(.4, 0, .2, 1);
	transition-duration: .15s
}

.transition-transform {
	transition-property: transform;
	transition-timing-function: cubic-bezier(.4, 0, .2, 1);
	transition-duration: .15s
}

.duration-300 {
	transition-duration: .3s
}

.duration-500 {
	transition-duration: .5s
}

.ease-in-out {
	transition-timing-function: cubic-bezier(.4, 0, .2, 1)
}

.hover\:rotate-0:hover {
	--tw-rotate: 0deg;
	transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.hover\:scale-105:hover {
	--tw-scale-x: 1.05;
	--tw-scale-y: 1.05;
	transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}

.hover\:bg-accent-pink\/90:hover {
	background-color: #ff2e63e6
}

.hover\:bg-black\/75:hover {
	background-color: #000000bf
}

.hover\:bg-indigo-700:hover {
	--tw-bg-opacity: 1;
	background-color: rgb(67 56 202 / var(--tw-bg-opacity))
}

.hover\:bg-surface-dark\/70:hover {
	background-color: #000000b3
}

.hover\:bg-white\/50:hover {
	background-color: #ffffff80
}

.hover\:from-blue-600:hover {
	--tw-gradient-from: #2563eb var(--tw-gradient-from-position);
	--tw-gradient-to: rgb(37 99 235 / 0) var(--tw-gradient-to-position);
	--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)
}

.hover\:to-sky-600:hover {
	--tw-gradient-to: #0284c7 var(--tw-gradient-to-position)
}

.hover\:text-accent-mint:hover {
	--tw-text-opacity: 1;
	color: rgb(0 245 212 / var(--tw-text-opacity))
}

.hover\:text-indigo-400:hover {
	--tw-text-opacity: 1;
	color: rgb(129 140 248 / var(--tw-text-opacity))
}

.hover\:shadow-xl:hover {
	--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);
	--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

.focus\:border-transparent:focus {
	border-color: transparent
}

.focus\:outline-none:focus {
	outline: 2px solid transparent;
	outline-offset: 2px
}

.focus\:ring-2:focus {
	--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
	--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
	box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
}

.focus\:ring-indigo-500:focus {
	--tw-ring-opacity: 1;
	--tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity))
}

.focus\:ring-offset-2:focus {
	--tw-ring-offset-width: 2px
}

.focus\:ring-offset-surface-light:focus {
	--tw-ring-offset-color: #111827
}

@media (min-width: 640px) {
	.sm\:flex-row {
		flex-direction: row
	}
}

@media (min-width: 768px) {
	.md\:bottom-\[-15\%\] {
		bottom: -15%
	}

	.md\:left-32 {
		left: 8rem
	}

	.md\:top-32 {
		top: 8rem
	}

	.md\:top-64 {
		top: 16rem
	}

	.md\:mb-12 {
		margin-bottom: 3rem
	}

	.md\:mt-\[8\%\] {
		margin-top: 8%
	}

	.md\:flex {
		display: flex
	}

	.md\:hidden {
		display: none
	}

	.md\:h-80 {
		height: 20rem
	}

	.md\:h-\[400px\] {
		height: 400px
	}

	.md\:h-\[600px\] {
		height: 600px
	}

	.md\:w-1\/2 {
		width: 50%
	}

	.md\:w-80 {
		width: 20rem
	}

	.md\:w-auto {
		width: auto
	}

	.md\:w-full {
		width: 100%
	}

	.md\:w-max {
		width: -moz-max-content;
		width: max-content
	}

	.md\:grid-cols-2 {
		grid-template-columns: repeat(2, minmax(0, 1fr))
	}

	.md\:space-y-6>:not([hidden])~:not([hidden]) {
		--tw-space-y-reverse: 0;
		margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
		margin-bottom: calc(1.5rem * var(--tw-space-y-reverse))
	}

	.md\:whitespace-nowrap {
		white-space: nowrap
	}

	.md\:px-24 {
		padding-left: 6rem;
		padding-right: 6rem
	}

	.md\:px-8 {
		padding-left: 2rem;
		padding-right: 2rem
	}

	.md\:py-5 {
		padding-top: 1.25rem;
		padding-bottom: 1.25rem
	}

	.md\:pl-\[20\%\] {
		padding-left: 20%
	}

	.md\:pl-\[50px\] {
		padding-left: 50px
	}

	.md\:pr-\[100px\] {
		padding-right: 100px
	}

	.md\:pt-8 {
		padding-top: 2rem
	}

	.md\:text-2xl {
		font-size: 1.5rem;
		line-height: 2rem
	}

	.md\:text-4xl {
		font-size: 2.25rem;
		line-height: 2.5rem
	}

	.md\:text-lg {
		font-size: 1.125rem;
		line-height: 1.75rem
	}

	.md\:text-xl {
		font-size: 1.25rem;
		line-height: 1.75rem
	}
}

@media (min-width: 1024px) {
	.lg\:col-span-1 {
		grid-column: span 1 / span 1
	}

	.lg\:col-span-2 {
		grid-column: span 2 / span 2
	}

	.lg\:w-1\/2 {
		width: 50%
	}

	.lg\:grid-cols-2 {
		grid-template-columns: repeat(2, minmax(0, 1fr))
	}

	.lg\:grid-cols-3 {
		grid-template-columns: repeat(3, minmax(0, 1fr))
	}

	.lg\:flex-row {
		flex-direction: row
	}

	.lg\:flex-row-reverse {
		flex-direction: row-reverse
	}

	.lg\:text-8xl {
		font-size: 6rem;
		line-height: 1
	}
}
</style>
`;