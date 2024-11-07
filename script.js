const input = document.querySelector("textarea");
const wordCount = document.querySelector("[data-word-count]");
const characterCount = document.querySelector("[data-character-count]");
const sentenceCount = document.querySelector("[data-sentence-count]");
const paragraphCount = document.querySelector("[data-paragraph-count]");
input.addEventListener("input", () => {
  const text = input.value;
  const words = text.split(/\s+/).filter((word) => word.trim().length > 0);
  wordCount.textContent = words.length;
  characterCount.textContent = text.length;
  const sentences = text
    .split(/[.!?]+/)
    .filter((sentence) => sentence.trim().length > 0);
  sentenceCount.textContent = sentences.length;
  const paragraphs = text
    .split(/\n+/)
    .filter((paragraph) => paragraph.trim().length > 0);
  paragraphCount.textContent = paragraphs.length;
});
