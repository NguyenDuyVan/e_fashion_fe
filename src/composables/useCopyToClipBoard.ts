export const useCopyToClipBoard = (textToCopy: string) => {
  navigator.clipboard.writeText(textToCopy)
}
