export function setAPIKey(key: string): void;
export function setSoftId(softId: number): void;

// disable verbosity
export function shutUp(): void;

export function getBalance(): Promise<number>;
export function getCreditsBalance(): Promise<number>;

enum SolveImageNumericRequirements {
  Nothing           = 0,
  OnlyNumbers       = 1,
  NumbersAndLetters = 2
};

type LanguagePool =
  "en" |
  "rn"; // Russia, Ukraine, Belarus, Kazakhstan

interface SolveImageSettings {
  phrase:       boolean;  // will result require a space
  case:         boolean;  // case sensitive
  numeric:      SolveImageNumericRequirements;
  comment:      string;   // comment for workers
  math:         boolean;  // captcha contains math
  minLength:    number;   // length of the result. 0 = no bounds
  maxLength:    number;   // length of the result. 0 = no bounds
  languagePool: LanguagePool;
};

// returns taskId
export function solveImage(imageBase64: string, settings: SolveImageSettings): Promise<number>;

export function reportIncorrectImageCaptcha(taskId: number): Promise<void>;

export function waitForResult(taskId: number): Promise<string>;
