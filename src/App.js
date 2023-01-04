import React, { useState } from "react";
import { marked } from "marked";

import "./App.css";

marked.setOptions({
  breaks: true,
});

const MOCKS_MARKDOWN = `# Hi this is a Markdown Previewer
## Made by DevChalenger 2023


The app element is a \`<main></main>\`
 \`\`\`
// this is multi-line code:

const anotherExample = (firstLine, lastLine) => {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

> Block Quotes!

### List of Package
- **React**
- Marked JS
- Purify JS

[Markdown Previewer user Stories](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const Editor = ({ markdown, setMarkdown }) => {
  return (
    <article className="editor-container">
      <header className="editor-header">
        <h1 className="editor-title">Editor</h1>
      </header>
      <section className="editor-section">
        <textarea
          id="editor"
          type="text"
          className="editor-input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
      </section>
    </article>
  );
};

const Previewer = ({ markdown }) => {
  return (
    <article className="previewer-container">
      <header className="previewer-header">
        <h1 className="previewer-title">Previewer</h1>
      </header>
      <section
        className="previewer-section"
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked.parse(markdown, { renderer: new marked.Renderer() }),
        }}
      ></section>
    </article>
  );
};

const App = () => {
  const [markdown, setMarkdown] = useState(MOCKS_MARKDOWN);
  return (
    <main className="markdown-container">
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Previewer markdown={markdown} />
    </main>
  );
};

export default App;
