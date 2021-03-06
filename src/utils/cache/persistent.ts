import type { LockInfo, UserInfo } from '/#/store';
import type { ProjectConfig } from '/#/config';
import type { RouteLocationNormalized } from 'vue-router';
import { createLocalStorage } from '/@/utils/cache';
import { Memory } from './memory';
import {
  TOKEN_KEY,
  USER_INFO_KEY,
  ROLES_KEY,
  LOCK_INFO_KEY,
  PROJ_CFG_KEY,
  APP_LOCAL_CACHE_KEY,
  MULTIPLE_TABS_KEY,
} from '/@/enums/cacheEnum';
import { DEFAULT_CACHE_TIME } from '/@/settings/encryptionSetting';
import { toRaw } from 'vue';

interface BasicStore {
  [TOKEN_KEY]: string | number | null | undefined;
  [USER_INFO_KEY]: UserInfo;
  [ROLES_KEY]: string[];
  [LOCK_INFO_KEY]: LockInfo;
  [PROJ_CFG_KEY]: ProjectConfig;
  [MULTIPLE_TABS_KEY]: RouteLocationNormalized[];
}

type SessionStore = BasicStore;

type LocalStore = BasicStore;
type SessionKeys = keyof SessionStore;

export type BasicKeys = keyof BasicStore;
type LocalKeys = keyof LocalStore;

const ls = createLocalStorage();

const localMemory = new Memory(DEFAULT_CACHE_TIME);
const sessionMemory = new Memory(DEFAULT_CACHE_TIME);

export class Persistent {
  static getLocal<T>(key: LocalKeys) {
    return localMemory.get(key)?.value as Nullable<T>;
  }

  static setLocal(
    key: LocalKeys,
    value: LocalStore[LocalKeys],
    immediate = false
  ): void {
    localMemory.set(key, toRaw(value));
    immediate && ls.set(APP_LOCAL_CACHE_KEY, localMemory.getCache);
  }

  static getSession<T>(key: SessionKeys) {
    return sessionMemory.get(key)?.value as Nullable<T>;
  }
}
