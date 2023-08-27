import React from 'react';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from '../data/dummy';
import { Header } from '../components';

const Editor = () => {
  const height = window.innerHeight - 200;

  return (
    <div className='md:m-5 md:p-5 bg-white rounded-md'>
      <Header
        // category='App'
        title='Editor'
      />
      <RichTextEditorComponent height={height}>
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
