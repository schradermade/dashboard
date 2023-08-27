import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const change = (args) => {
  document.getElementById('preview').style.backgroundColor =
    args.currentValue.hex;
};

const ColorPicker = () => {
  // const height = window.innerHeight;

  return (
    <div className='md:m-5 md:p-5 bg-white rounded-md'>
      <Header
        // category='App'
        title='Color Picker'
      />
      <div className='text-center'>
        <div id='preview' />
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
            <ColorPickerComponent
              id='inline-palete'
              mode='Palette'
              modeSwitcher={false}
              inline
              showButtons
              change={change}
            />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent
              id='inline-palete'
              mode='Picker'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
