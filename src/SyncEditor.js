 import  React, { useMemo, useState, useRef, useEffect } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate'
import Mitt from 'mitt'
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'
import initialValues from './initialValues'

const emitter = new Mitt()
export const SyncEditor = () => {

  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState(initialValues);
  // const remote = useRef(null);

  useEffect(() => {
    emitter.on('*', () =>{
      console.log('change happened');
    })
  }, [])

  return (
    <Slate
    value = {value}
    onChange = {newValue => setValue(newValue)}
    editor = {editor}
    // ref={editor}
    // onChange = {opts => {
    //   console.log('operation');
    //   setValue(opts.value)

    //   const ops = opts.operations
    //     .filter(
    //       o => 
    //         o.type !== "set_selection" &&
    //         o.type !== "set_value" &&
    //         (!o.data || !o.data.has("source"))
    //     )
    //     .toJS()
    //     .map(o => ({...o, data: { source: "one" } }));

    //   emitter.emit("something", ops);
    // }}
    >
        <Editable />
    </Slate>
  )
}