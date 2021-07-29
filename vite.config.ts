import { UserConfigExport, ConfigEnv, defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
// import { viteMockServe } from "vite-plugin-mock"

const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir)
}

const alias: Record<string, string> = {
  "/@": pathResolve('src')
}

// https://vitejs.dev/config/
// export default ({ command }: ConfigEnv): UserConfigExport => {
//   // 根据项目配置。可以配置在.env文件
//   let prodMock = true;
//   return {
//     plugins: [
//       vue(),
//       styleImport({
//         libs: [
//           {
//             libraryName: 'element-plus',
//             esModule: true,
//             ensureStyleFile: true,
//             resolveStyle: (name) => {
//               return `element-plus/lib/theme-chalk/${name}.css`;
//             },
//             resolveComponent: (name) => {
//               return `element-plus/lib/${name}`;
//             },
//           }
//         ]
//       }),
//       // viteMockServe({
//       //   // default
//       //   mockPath: 'mock',
//       //   localEnabled: command === 'serve',
//       //   prodEnabled: command !== 'serve' && prodMock,
//       //   //  这样可以控制关闭mock的时候不让mock打包到最终代码内
//       //   injectCode: `
//       //     import { setupProdMockServer } from './mockProdServer';
//       //     setupProdMockServer();
//       //   `,
//       //   logger: true
//       // })
//     ],
//     resolve: {
//       alias
//     }
//   }
// }
export default defineConfig({
    // 根据项目配置。可以配置在.env文件
    plugins: [
      vue(),
      styleImport({
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: (name) => {
              return `element-plus/lib/theme-chalk/${name}.css`;
            },
            resolveComponent: (name) => {
              return `element-plus/lib/${name}`;
            },
          }
        ]
      }),
      // viteMockServe({
      //   // default
      //   mockPath: 'mock',
      //   localEnabled: command === 'serve',
      //   prodEnabled: command !== 'serve' && prodMock,
      //   //  这样可以控制关闭mock的时候不让mock打包到最终代码内
      //   injectCode: `
      //     import { setupProdMockServer } from './mockProdServer';
      //     setupProdMockServer();
      //   `,
      //   logger: true
      // })
    ],
    resolve: {
      alias
    }
  })