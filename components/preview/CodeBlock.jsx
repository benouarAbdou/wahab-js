"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ code, language = "jsx" }) {
  return (
    <div className="max-h-[32rem] overflow-auto bg-black">
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        showLineNumbers
        customStyle={{
          margin: 0,
          background: "transparent",
          fontSize: "0.8rem",
          padding: "1.5rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
