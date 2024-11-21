import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify({ /* preset options */}),
    presetUno(),
    // ...custom presets
  ],
  shortcuts: {
    'shadow-light': 'shadow-[0_0_4px_4px_rgba(230,230,230,0.3)]',
    'btn-base': 'px-6 py-2',
    'btn-solid': 'btn-base rounded-full text-white bg-gray-900 hover:bg-gray-700',
    'btn-outline': 'btn-base rounded-full border border-gray-700 bg-white hover:bg-gray-100 hover:text-gray-700'
  }
})