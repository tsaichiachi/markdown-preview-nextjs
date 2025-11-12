"use client";
import { useEffect, useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const DEFAULT_MD = `# Markdown ➜ HTML 預覽器
...`;

export default function MarkdownEditor() {
  const [value, setValue] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("markdown-value");
      return saved ?? DEFAULT_MD;
    }
    return DEFAULT_MD;
  });

  useEffect(() => {
    localStorage.setItem("markdown-value", value);
  }, [value]);

  const markdown = useMemo(() => value, [value]);

  return (
    <div className="space-y-4">
      {/* 父層並阻止自己滾動 */}
      <div className="flex gap-4 h-[80vh] min-h-0 overflow-hidden">
        <textarea
          className="basis-[50%] resize-x overflow-auto min-h-0 p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="# 請輸入Markdown文字..."
        />
        <div className="basis-[50%] min-h-0 overflow-auto rounded-lg">
          <article className="prose dark:prose-invert max-w-none p-6">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {markdown}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}
