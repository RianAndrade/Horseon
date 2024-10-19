"use client";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";

// Exporta a função App como uma exportação nomeada
export function App() {
  const editor = useCreateBlockNote();
  return <BlockNoteView editor={editor} />;
}

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
}

// Mantém o Editor como exportação padrão
export default function Editor({ onChange, initialContent }: EditorProps) {
  const { resolvedTheme } = useTheme();

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
  });

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={() => {
          onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
        }}
      />
    </div>
  );
}
