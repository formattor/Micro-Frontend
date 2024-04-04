// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import * as Plugin_0 from 'D:/GitRepo/Micro-Frontend/Qiankun/umi-app/src/app.ts';
import * as Plugin_1 from 'D:/GitRepo/Micro-Frontend/Qiankun/umi-app/src/.umi/plugin-qiankun-slave/slaveRuntimePlugin.ts';
import { PluginManager } from 'umi';

function __defaultExport (obj) {
  if (obj.default) {
    return typeof obj.default === 'function' ? obj.default() :  obj.default
  }
  return obj;
}
export function getPlugins() {
  return [
    {
      apply: __defaultExport(Plugin_0),
      path: process.env.NODE_ENV === 'production' ? void 0 : 'D:/GitRepo/Micro-Frontend/Qiankun/umi-app/src/app.ts',
    },
    {
      apply: Plugin_1,
      path: process.env.NODE_ENV === 'production' ? void 0 : 'D:/GitRepo/Micro-Frontend/Qiankun/umi-app/src/.umi/plugin-qiankun-slave/slaveRuntimePlugin.ts',
    },
  ];
}

export function getValidKeys() {
  return ['patchRoutes','patchClientRoutes','modifyContextOpts','rootContainer','innerProvider','i18nProvider','accessProvider','dataflowProvider','outerProvider','render','onRouteChange','qiankun',];
}

let pluginManager = null;
export function createPluginManager() {
  pluginManager = PluginManager.create({
    plugins: getPlugins(),
    validKeys: getValidKeys(),
  });
  return pluginManager;
}

export function getPluginManager() {
  return pluginManager;
}
