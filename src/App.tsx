import './App.css'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { FORMAT_TEXT_COMMAND } from 'lexical'

const theme = {
  paragraph: 'mb-2',
  text: {
    bold: 'font-bold',
    italic: 'italic',
  },
}

function Toolbar() {
  const [editor] = useLexicalComposerContext()

  const format = (type: 'bold' | 'italic') => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, type)
  }

  return (
    <div className="mb-2 flex gap-2">
      <button
        type="button"
        className="px-2 py-1 border rounded"
        onClick={() => format('bold')}
      >
        Bold
      </button>
      <button
        type="button"
        className="px-2 py-1 border rounded"
        onClick={() => format('italic')}
      >
        Italic
      </button>
    </div>
  )
}

function Placeholder() {
  return (
    <div className="absolute pointer-events-none text-gray-400">
      Enter some text...
    </div>
  )
}

const initialConfig = {
  namespace: 'MyEditor',
  theme,
  onError(error: Error) {
    throw error
  },
}

export default function App() {
  return (
    <main className="prose p-10">
      <h1>Lexical Editor Example</h1>
      <LexicalComposer initialConfig={initialConfig}>
        <Toolbar />
        <div className="relative border p-2 rounded min-h-[100px]">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="outline-none min-h-[80px]" />
            }
            placeholder={<Placeholder />}
            ErrorBoundary={() => <div>Error loading editor</div>}
          />
          <HistoryPlugin />
          <OnChangePlugin onChange={() => {}} />
        </div>
      </LexicalComposer>
    </main>
  )
}
