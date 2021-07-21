import { defineStore } from 'pinia';
import type { ProjectConfig } from '/#/config';
import type { BeforeMiniState } from '/#/store';
import { ThemeEnum } from '/@/enums/appEnum';

interface AppState {
  darkMode?: ThemeEnum;
  // Page loading status
  pageLoading: boolean;
  // project config
  projectConfig: ProjectConfig | null;
  // When the window shrinks, remember some states, and restore these states when the window is restored
  beforeMiniInfo: BeforeMiniState;
}
export const useAppStore = defineStore({
  id: 'app',
});
