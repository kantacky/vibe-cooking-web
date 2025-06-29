export interface AudioPlayerService {
  playAudio(audioUrl: string, forceRestart?: boolean): Promise<void>;
  stopAudio(): void;
  pauseAudio(): void;
  resumeAudio(): void;
  getAudioPlayerStatus(): AudioPlayerStatus;
  getCurrentAudioUrl(): string | null;
  setVolume(volume: number): void;
  addListener(listener: () => void): void;
  removeListener(listener: () => void): void;
}

export type AudioPlayerStatus = 'idle' | 'playing' | 'paused' | 'stopped';

export class AudioPlayerServiceImpl implements AudioPlayerService {
  private audio: HTMLAudioElement | null = null;
  private currentAudioUrl: string | null = null;
  private status: AudioPlayerStatus = 'idle';
  private listeners: Set<() => void> = new Set();

  async playAudio(audioUrl: string, forceRestart = false): Promise<void> {
    // 強制再開フラグがfalseで、既に同じ音声が再生中の場合は何もしない
    if (
      !forceRestart &&
      this.currentAudioUrl === audioUrl &&
      this.status === 'playing'
    ) {
      return;
    }

    // 現在の音声を停止
    this.stopAudio();

    try {
      // 新しい音声を作成
      this.audio = new Audio(audioUrl);
      this.currentAudioUrl = audioUrl;

      // イベントリスナーを設定
      this.audio.addEventListener('loadstart', () => {});

      this.audio.addEventListener('canplay', () => {});

      this.audio.addEventListener('play', () => {
        this.status = 'playing';
        this.notifyListeners();
      });

      this.audio.addEventListener('pause', () => {
        this.status = 'paused';
        this.notifyListeners();
      });

      this.audio.addEventListener('ended', () => {
        this.status = 'stopped';
        this.notifyListeners();
      });

      this.audio.addEventListener('error', () => {
        this.status = 'stopped';
        this.notifyListeners();
      });

      // 音声を再生
      await this.audio.play();
    } catch (error) {
      this.status = 'stopped';
      this.currentAudioUrl = null;
      this.notifyListeners();
      throw error;
    }
  }

  stopAudio(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }
    this.status = 'stopped';
    this.currentAudioUrl = null;
    this.notifyListeners();
  }

  pauseAudio(): void {
    if (this.audio && this.status === 'playing') {
      this.audio.pause();
    }
  }

  resumeAudio(): void {
    if (this.audio && this.status === 'paused') {
      this.audio.play();
    }
  }

  getAudioPlayerStatus(): AudioPlayerStatus {
    return this.status;
  }

  getCurrentAudioUrl(): string | null {
    return this.currentAudioUrl;
  }

  setVolume(volume: number): void {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, volume));
    }
  }

  addListener(listener: () => void): void {
    this.listeners.add(listener);
  }

  removeListener(listener: () => void): void {
    this.listeners.delete(listener);
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener());
  }
}
